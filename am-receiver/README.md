# AM receiver demonstration

Open the editable circuit: https://www.tinkercad.com/things/3zIJS9WIyUh/editel

The receiver follows the first supplied diagram: parallel LC input, series diode, parallel detector resistor/capacitor, coupling capacitor, NPN transistor with a supply-to-base bias resistor and an emitter resistor, and an 8 ohm collector load to +9 V.

## Receiver values

| Part | Value | Connection |
|---|---|---|
| L1 | 250 microhenry | RF input to common ground |
| C1 | 10.13 nanofarad | RF input to common ground; approximately 100 kHz resonance with L1 |
| D1 | Tinkercad generic diode | Anode to RF input, cathode to detector output |
| R1 | 10 kilohm | Detector output to ground |
| C2 | 2 nanofarad | Detector output to ground |
| C3 | 10 microfarad | Detector output to Q1 base |
| R2 | 100 kilohm | +9 V to Q1 base |
| R3 | 1 kilohm | Q1 emitter to ground |
| Q1 | Tinkercad generic NPN | Base from C3/R2; emitter through R3; collector through load to +9 V |
| SPK load | 8 ohm resistor | +9 V to Q1 collector |
| Supply | 9 V battery | Common negative terminal |

L1 and C1 were unspecified in the reference; the values above are chosen for the test carrier. The generic diode/NPN are simulator substitutes for the reference's 1N4148/BC547. Tinkercad's component search offers a piezo rather than an 8 ohm loudspeaker, so a labelled resistor represents the speaker's nominal electrical load. No acoustic loudspeaker response is simulated.

## Test input and scopes

The two function generators and the additional NPN on the left form a test fixture, outside the receiver. The carrier generator supplies a 100 kHz rectangular switching signal. The message generator supplies a 500 Hz sine with a positive offset; the transistor varies the pulse amplitude. A 220 ohm feed resistor, a 100 nF test-input coupling capacitor and a 100 ohm source impedance feed the receiver; the capacitor prevents the tuning inductor from shorting the test source's DC component. The LC input selects the carrier-frequency component. This is an educational generated-signal test, not live broadcast reception.

The scope named **AM input** measures the tuned RF node at 0.5 ms per division. **Detector envelope** measures D1 cathode relative to ground. **8 ohm output** measures across the load: positive at +9 V and negative at Q1 collector. This differential connection makes the small output voltage visible instead of hiding it beneath the collector's roughly 9 V DC level. The detector and output scopes use 1 ms per division; a 500 Hz signal has a 2 ms period, or two divisions.

The carrier source is set to 5 V peak-to-peak with 2.5 V DC offset, and the message source to 2 V peak-to-peak with 3 V DC offset. These belong to the external test fixture.

Actual scope captures are saved as `scopeRF-simulation.png`, `scopeDet-simulation.png` and `scopeAudio-simulation.png`. These are screenshots of Tinkercad, not illustrative plots. Run `node am-receiver/verify-netlist.mjs` from the parent workspace to verify the saved wiring graph.

Click **Start Simulation** and allow the initial capacitor transient to pass. Tinkercad may run much slower than real time with the RF circuit. The simulation clock, rather than elapsed real time, indicates progress. The detector can retain RF ripple with the reference's 2 nF capacitor.

## Important interpretation

This preserves the reference's single-transistor output topology. Its 1 kilohm emitter resistor limits current, so it provides very little power into an 8 ohm speaker. A visible recovered waveform does not demonstrate useful loudspeaker volume. A practical loudspeaker receiver would need a power-output stage; that stage is intentionally not substituted for the supplied circuit.

The editable design is the primary result. `build-state.json` records the inspected connection graph and browser node references for continuation.
