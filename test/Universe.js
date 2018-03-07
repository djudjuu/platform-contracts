import { expect } from "chai";
import { prettyPrintGasCost } from "./helpers/gasUtils";
import createAccessPolicy from "./helpers/createAccessPolicy";
import { eventValue } from "./helpers/events";
import roles from "./helpers/roles";
import knownInterfaces from "./helpers/knownInterfaces";
import registerSingletons from "./helpers/registerSingletons";

const EthereumForkArbiter = artifacts.require("EthereumForkArbiter");
const Universe = artifacts.require("Universe");

contract("Universe", ([_, arbiter, universeManager, other]) => {
  let universe;
  let accessPolicy;
  let ethereumForkArbiter;

  beforeEach(async () => {
    accessPolicy = await createAccessPolicy([
      { subject: arbiter, role: roles.platformOperatorRepresentative },
      { subject: universeManager, role: roles.universeManager }
    ]);
    ethereumForkArbiter = await EthereumForkArbiter.new(accessPolicy.address);
    universe = await Universe.new(
      accessPolicy.address,
      ethereumForkArbiter.address
    );
  });

  function expectSingletonSetEvent(tx, interfaceId, address) {
    const event = eventValue(tx, "LogSetSingleton");
    expect(event).to.exist;
    expect(event.args.interfaceId).to.equal(interfaceId);
    expect(event.args.instance).to.equal(address);
  }

  function expectSetCollectionInterfaceEvent(tx, interfaceId, address, isset) {
    const event = eventValue(tx, "LogSetCollectionInterface");
    expect(event).to.exist;
    expect(event.args.interfaceId).to.equal(interfaceId);
    expect(event.args.instance).to.equal(address);
    expect(event.args.isSet).to.equal(isset);
  }

  it("should deploy", async () => {
    await prettyPrintGasCost("Deploy", universe);
    expect(await universe.accessPolicy()).to.eq(accessPolicy.address);
    expect(await universe.forkArbiter()).to.eq(ethereumForkArbiter.address);
    expect(await universe.getSingleton(knownInterfaces.accessPolicy)).to.eq(
      accessPolicy.address
    );
    expect(await universe.getSingleton(knownInterfaces.forkArbiter)).to.eq(
      ethereumForkArbiter.address
    );
    expect(
      await universe.getManySingletons([
        knownInterfaces.forkArbiter,
        knownInterfaces.accessPolicy
      ])
    ).to.deep.eq([ethereumForkArbiter.address, accessPolicy.address]);
    expect(
      await universe.isSingleton(
        knownInterfaces.accessPolicy,
        accessPolicy.address
      )
    ).to.be.true;
  });

  it("should set singleton", async () => {
    const tx = await universe.setSingleton(knownInterfaces.neumark, other, {
      from: universeManager
    });
    expectSingletonSetEvent(tx, knownInterfaces.neumark, other);
    expect(await universe.getSingleton(knownInterfaces.neumark)).to.eq(other);
    expect(
      await universe.getManySingletons([knownInterfaces.neumark])
    ).to.deep.eq([other]);
    expect(await universe.isSingleton(knownInterfaces.neumark, other)).to.be
      .true;
  });

  it("should set all known singletons", async () => {
    const regTx = await registerSingletons(universe, universeManager, [
      { ki: knownInterfaces.neumark, addr: other }
    ]);
    expectSingletonSetEvent(regTx, knownInterfaces.neumark, other);
    expect(
      await universe.getManySingletons([knownInterfaces.neumark])
    ).to.deep.eq([other]);
    expect(await universe.neumark()).to.eq(other);

    const kis = [
      {
        ki: knownInterfaces.etherToken,
        addr: "0x498a042f52f1737a77b91dd8107e68d75bf9f478"
      },
      {
        ki: knownInterfaces.euroToken,
        addr: "0xd102445e80c56d36c7dcd968dc2792b87b236b46"
      },
      {
        ki: knownInterfaces.feeDisbursal,
        addr: "0xc22b7a02afa706b5bc2fdfc305288bd910812977"
      },
      {
        ki: knownInterfaces.euroLock,
        addr: "0x147df49452f805d1a35e7ca314f564d1087b112f"
      },
      {
        ki: knownInterfaces.etherLock,
        addr: "0x1608e04a05080150bbe5d33c95786016287f2990"
      },
      {
        ki: knownInterfaces.gasExchange,
        addr: "0x42194bf970666c3232f37dc39684a6937a65e2b9"
      },
      {
        ki: knownInterfaces.icbmEtherLock,
        addr: "0x1d5f6ed3ea6f3417b352d65333ea6eaaf6b1bb1d"
      },
      {
        ki: knownInterfaces.icbmEuroLock,
        addr: "0x4a882db40af31d2f7ae3cecd67d7a43e8ebf42f5"
      },
      {
        ki: knownInterfaces.identityRegistry,
        addr: "0x87c308a3f6752feadea2296a0c711ed31aa69c5f"
      },
      {
        ki: knownInterfaces.tokenExchange,
        addr: "0x147b317c8d0bdf72e3df3395d839af4bc581eebb"
      },
      {
        ki: knownInterfaces.tokenExchangeRateOracle,
        addr: "0x20216d0d0912d0a44cec2ffbc85043da6a943fda"
      }
    ];
    const multiRegTx = await registerSingletons(universe, universeManager, kis);
    // find if number of events matches
    const events = multiRegTx.logs.filter(e => e.event === "LogSetSingleton");
    expect(events.length).to.eq(kis.length);
    // get all known interfaces
    const knownInterfacesList = kis.map(({ ki }) => ki);
    const knownInstances = kis.map(({ addr }) => addr);
    expect(await universe.getManySingletons(knownInterfacesList)).to.deep.eq(
      knownInstances
    );
    // compare with convenience getters
    const getters = [
      "etherToken",
      "euroToken",
      "feeDisbursal",
      "euroLock",
      "etherLock",
      "gasExchange",
      "icbmEtherLock",
      "icbmEuroLock",
      "identityRegistry",
      "tokenExchange",
      "tokenExchangeRateOracle"
    ];
    for (let ii = 0; ii < kis.length; ii += 1) {
      const loopi = await universe[getters[ii]]();
      expect(loopi).to.eq(knownInstances[ii]);
    }
  });

  it("should set unknown singleton");

  it("should replace singleton");

  it("should check unknown singleton false");

  it("should set interface in collection", async () => {
    const addr = "0x20216d0d0912d0a44cec2ffbc85043da6a943fda";
    const tx = await universe.setCollectionInterface(
      knownInterfaces.commitmentInterface,
      addr,
      true,
      { from: universeManager }
    );
    expectSetCollectionInterfaceEvent(
      tx,
      knownInterfaces.commitmentInterface,
      addr,
      true
    );
    expect(
      await universe.isInterfaceCollectionInstance(
        knownInterfaces.commitmentInterface,
        addr
      )
    ).to.be.true;
  });

  it("should set interface in many collections");

  it("should remove interface from collection");

  it("should replace interface in collection");

  it("reject on set not from manager");
});
