export default {
  name: "Electronics",
  data: [
    {
      id: 0,
      name: "Electric Current",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.12voltplanet.co.uk/user/Current_flow_diagram.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Electric_current
Source: https://en.wikipedia.org/wiki/Ampere
Source: https://en.wikipedia.org/wiki/Elementary_charge

I = dQ/dt
1A = 1C/s = -6.242×10^18 electrons. electrons/s
Elementary charge = (e) = 1.602×10^19 C

An electric current is a flow of electric charge.[1]:2 In electric circuits this
charge is often carried by moving electrons in a wire. It can also be carried by
ions in an electrolyte, or by both ions and electrons such as in an ionised gas
(plasma).[2]

The SI unit for measuring an electric current is the ampere, which is the flow
of electric charge across a surface at the rate of one coulomb per second.
Electric current is measured using a device called an ammeter.[3]

Electric currents cause Joule heating, which creates light in incandescent light
bulbs. They also create magnetic fields, which are used in motors, inductors and
generators.

The moving charged particles in an electric current are called charge carriers.
In metals, one or more electrons from each atom are loosely bound to the atom,
and can move freely about within the metal. These conduction electrons are the
charge carriers in metal conductors.
`
        }
      ]
    },
    {
      id: 1,
      name: "Voltage",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Voltage

Voltage is the difference in electric potential between two points. The
difference in electric potential between two points (i.e., voltage) in a static
electric field is defined as the work needed per unit of charge to move a test
charge between the two points. In the International System of Units, the derived
unit for voltage is named volt.[1] In SI units, work per unit charge is
expressed as joules per coulomb, where 1 volt = 1 joule (of work) per 1 coulomb
(of charge). The official SI definition for volt uses power and current, where 1
volt = 1 watt (of power) per 1 ampere (of current).[1] This definition is
equivalent to the more commonly used 'joules per coulomb'. Voltage or electric
potential difference is denoted symbolically by ∆V, but more often simply as V,
for instance in the context of Ohm's or Kirchhoff's circuit laws.

Electric potential differences between points can be caused by electric charge,
by electric current through a magnetic field, by time-varying magnetic fields,
or some combination of these three.[2][3] A voltmeter can be used to measure the
voltage (or potential difference) between two points in a system; often a common
reference potential such as the ground of the system is used as one of the
points. A voltage may represent either a source of energy (electromotive force)
or lost, used, or stored energy (potential drop).
`
        }
      ]
    },
    {
      id: 2,
      name: "Resistance vs Resistivity vs Conductivity",
      language: "markdown",
      tabs: [
        {
          image_src: "https://files.mtstatic.com/site_4539/8191/0?Expires=1548700607&Signature=jZIpB874X2qGsidFmZBblMr87zFXmkSf0n5gq9INt9ANj-WfQTa28vqOOJ19mAtDd28vP4EWILoHF~k4N4GazyRmd1GTlKj9RVnN468i1NtXmMVtERCCwt7I3GUCAVVcUKS22Op1eIUNNIErkE3yyD07r9tQKMOehReY6SA-DT8_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance

The electrical resistance of an object is a measure of its opposition to the
flow of electric current. The inverse quantity is electrical conductance, and is
the ease with which an electric current passes. Electrical resistance shares
some conceptual parallels with the notion of mechanical friction. The SI unit of
electrical resistance is the ohm (Ω), while electrical conductance is measured
in siemens (S).

Source: https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity

Electrical resistivity (also known as specific electrical resistance, or volume
resistivity) is a fundamental property of a material that quantifies how
strongly that material opposes the flow of electric current. A low resistivity
indicates a material that readily allows the flow of electric current.
Resistivity is commonly represented by the Greek letter ρ (rho). The SI unit of
electrical resistivity is the ohm-metre (Ω⋅m).[1][2][3] As an example, if a
1 m × 1 m × 1 m solid cube of material has sheet contacts on two opposite faces,
and the resistance between these contacts is 1 Ω, then the resistivity of the
material is 1 Ω⋅m.

Electrical conductivity or specific conductance is the reciprocal of electrical
resistivity, and measures a material's ability to conduct an electric current.
It is commonly represented by the Greek letter σ (sigma), but κ (kappa)
(especially in electrical engineering) or γ (gamma) are also occasionally used.
Its SI unit is siemens per metre (S/m).
`
        }
      ]
    },
    {
      id: 3,
      name: "Heat vs. Power",
      language: "markdown",
      tabs: [
        {
          image_src: "https://images.slideplayer.com/25/7789578/slides/slide_6.jpg",
          name: "Question",
          data:
`Source: http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elepow.html
The electric power in watts associated with a complete electric circuit or a
circuit component represents the rate at which energy is converted from the
electrical energy of the moving charges to some other form, e.g., heat,
mechanical energy, or energy stored in electric fields or magnetic fields. For a
resistor in a DC Circuit the power is given by the product of applied voltage
and the electric current: P = VI
`
        }
      ]
    },
    {
      id: 4,
      name: "Ground vs Neutral",
      language: "markdown",
      tabs: [
        {
          image_src: "http://cdn.differencebetween.net/wp-content/uploads/2018/03/Neutral-VERSUS-Ground-.jpg",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Ground_and_neutral

As the neutral point of an electrical supply system is often connected to earth
ground, ground and neutral are closely related. Under certain conditions, a
conductor used to connect to a system neutral is also used for grounding
(earthing) of equipment and structures. Current carried on a grounding conductor
can result in objectionable or dangerous voltages appearing on equipment
enclosures, so the installation of grounding conductors and neutral conductors
is carefully defined in electrical regulations. Where a neutral conductor is
used also to connect equipment enclosures to earth, care must be taken that the
neutral conductor never rises to a high voltage with respect to local ground.


Definitions:

Ground or earth in a mains (AC power) electrical wiring system is a conductor
that provides a low-impedance path to the earth to prevent hazardous voltages
from appearing on equipment (high voltage spikes).[citation needed] The terms
ground and earth are used synonymously in this section; ground is more common in
North American English, and earth is more common in British English. Under
normal conditions, a grounding conductor does not carry current. Grounding is an
integral path for home wiring also because it causes circuit breakers to trip
more quickly (ie, GFI), which is safer. Adding new grounds requires a qualified
electrician with information particular to a power company distribution region.

Neutral is a circuit conductor that normally carries current back to the source.
Neutral is usually connected to ground (earth) at the main electrical panel,
street drop, or meter, and also at the final step-down transformer of the
supply. That is for simple single panel installations; for multiple panels the
situation is more complex.

In the electrical trade, the conductor of a 2-wire circuit connected to the
supply neutral point and earth ground is referred to as the neutral. [1]

In a polyphase (usually three-phase) AC system, the neutral conductor is
intended to have similar voltages to each of the other circuit conductors, but
may carry very little current if the phases are balanced.

All neutral wires of the same earthed (grounded) electrical system should have
the same electrical potential, because they are all connected through the system
ground. Neutral conductors are usually insulated for the same voltage as the
line conductors, with interesting exceptions.[2]
`
        }
      ]
    },
    {
      id: 5,
      name: "Current Divider",
      language: "markdown",
      tabs: [
        {
          image_src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Current_division_example.svg",
          name: "Question",
          data: " "
        }
      ]
    },
    {
      id: 6,
      name: "Voltage Divider",
      language: "markdown",
      tabs: [
        {
          image_src: "http://hyperphysics.phy-astr.gsu.edu/hbase/electric/imgele/acvd.png",
          name: "Question",
          data: " "
        }
      ]
    },
    {
      id: 7,
      name: "AC generation",
      language: "markdown",
      tabs: [
        {
          image_src: "http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/imgmag/ACGEN.gif",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Alternating_current

Alternating current (AC) is an electric current which periodically reverses
direction, in contrast to direct current (DC) which flows only in one direction.

The usual waveform of alternating current in most electric power circuits is a
sine wave, whose positive half-period corresponds with positive direction of the
current and vice versa. In certain applications, different waveforms are used,
such as triangular or square waves. Audio and radio signals carried on
electrical wires are also examples of alternating current. These types of
alternating current carry information such as sound (audio) or images (video)
sometimes carried by modulation of an AC carrier signal. These currents
typically alternate at higher frequencies than those used in power transmission.

Source: https://en.wikipedia.org/wiki/Electric_machine#AC_generator

An AC generator converts mechanical energy into alternating current electricity.
Because power transferred into the field circuit is much less than power
transferred into the armature circuit, AC generators nearly always have the
field winding on the rotor and the armature winding on the stator.
AC generators are classified into several types.
	•	In an induction generator, the stator magnetic flux induces currents in the
    rotor. The prime mover then drives the rotor above the synchronous speed,
    causing the opposing rotor flux to cut the stater coils producing active
    current in the stater coils, thus sending power back to the electrical grid.
    An induction generator draws reactive power from the connected system and so
    cannot be an isolated source of power.
	•	In a Synchronous generator (alternator), the current for the magnetic field
    is provided by a separate DC current source.

Source: https://www.quora.com/How-does-an-AC-generator-work-and-on-what-principle

As a matter of fact, the principle of AC generator is the same to direct-current
generator. The basic principle of a generator is to convert motion into
electricity. Providing this motion requires that either a magnetic field is
generated and a wire coil is rotated within it, or a magnetic field is rotated
within a stationary coil. The turning of a coil in a magnetic field produces
motional emfs in both sides of the coil which add. Since the component of the
velocity perpendicular to the magnetic field changes sinusoidally with the
rotation, the generated voltage is sinusoidal or AC.

`
        }
      ]
    },
    {
      id: 8,
      name: "AC vs DC for Power Transmission",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/War_of_the_currents#Electric_power_transmission

Transmission loss[edit]

The advantage of AC for distributing power over a distance is due to the ease of
changing voltages using a transformer. Available power is the product of current 
× voltage at the load. For a given amount of power, a low voltage requires a
higher current and a higher voltage requires a lower current. Since metal
conducting wires have an almost fixed electrical resistance, some power will be
wasted as heat in the wires. This power loss is given by Joule's laws and is
proportional to the square of the current. Thus, if the overall transmitted
power is the same, and given the constraints of practical conductor sizes,
high-current, low-voltage transmissions will suffer a much greater power loss
than low-current, high-voltage ones. This holds whether DC or AC is used.

Converting DC power from one voltage to another required a large spinning rotary
converter or motor-generator set, which was difficult, expensive, inefficient,
and required maintenance, whereas with AC the voltage can be changed with simple
and efficient transformers that have no moving parts and require very little
maintenance. This was the key to the success of the AC system. Modern
transmission grids regularly use AC voltages up to 765,000 volts.[121] Power
electronic devices such as the mercury-arc valve and thyristor made high-voltage
direct current transmission practical by improving the reliability and
efficiency of conversion between alternating and direct current, but such
technology only became possible on an industrial scale starting in the 1960s.

Alternating-current transmission lines have losses that do not occur with direct
current. Due to the skin effect, a conductor will have a higher resistance to
alternating current than to direct current; the effect is measurable and of
practical significance for large conductors carrying thousands of amperes. The
increased resistance due to the skin effect can be offset by changing the shape
of conductors from a solid core to a braid of many small (isolated) wires. Total
losses in systems using high-voltage transmission and transformers to reduce
(or increase) the voltage are very much lower than DC transmission at working
voltage.


`
        }
      ]
    },
    {
      id: 9,
      name: "RMS and 3-Phase Power",
      language: "markdown",
      tabs: [
        {
          image_src: "http://www.animations.physics.unsw.edu.au/jw/images/power_files/3phase.gif",
          name: "Question",
          data:
`Source: http://www.animations.physics.unsw.edu.au/jw/power.html

The power p converted in a resistor (ie the rate of conversion of electrical
energy to heat) is: p(t) = iv = (v^2)/R = (i^2)R.

We use lower case p(t) because this is the expression for the instantaneous
power at time t. Usually, we are interested in the mean power delivered, which
is normally written P. P is the total energy converted in one cycle, divided by
the period T of the cycle.

RMS = root-mean-square
	•	V = Vm/√2 ~ 0.71*Vm is the RMS value of the voltage (Peak = Vm)
	•	I = Im/√2 ~ 0.71*Im is the RMS value of the current (Peak = Im)

When talking of AC, RMS values are so commonly used that, unless otherwise
stated, you may assume that RMS values are intended*. For instance, normal
domestic AC in Australia is 240 Volts AC with frequency 50 Hz. The RMS voltage
is 240 volts, so the peak value Vm= V.√2 = 340 volts. So the active wire goes
from +340 volts to -340 volts and back again 50 times per second.

* An exception: manufacturers and sellers of HiFi equipment sometimes use peak
values rather than RMS values, which makes the equipment seem more powerful than
it is.

Power in a resistor. In a resistor R, the peak power (achieved instantaneously
100 times per second for 50 Hz AC) is (Vm^2)/R = (im^2)*R. As discussed above,
the voltage, current and so the power pass through zero volts 100 times per
second, so the average power is less than this. The average is exactly as shown
above: P = (Vm^2)/2R = (V^2)/R.

Power in inductors and capacitors. In ideal inductors and capacitors, a
sinusoidal current produces voltages that are respecively 90° ahead and behind
the phase of the current. So if i = Imsin wt, the voltages across the inductor
and capacitor are Vmcos wt and -Vmcos wt respectively. Now the integral of
cos*sin over a whole number of cycles is zero. Consequently, ideal inductors and
capacitors do not, on average, take power from the circuit.

Three phase AC

Single phase AC has the advantage that it only requires 2 wires. Its
disadvantage is seen in the graph at the top of this page: twice every cycle V
goes to zero. If you connect a phototransistor circuit to an oscilloscope, you
will see that fluorescent lights turn off 100 times per second (or 120, if you
are on 60 Hz supply). What if you need a more even supply of electricity? One
can store energy in capacitors, of course, but with high power circuits this
would require big, expensive capacitors. What to do?

An AC generator may have more than one coil. If it has three coils, mounted at
relative angles of 120°, then it will produce three sinusoidal emfs with
relative phases of 120°, as shown in the upper figure at right. The power
delivered to a resistive load by each of these is proportional to V^2. The sum
of the three V^2 terms is a constant. We saw above that the average of V^2 is
half the peak value, so this constant is 1.5 times the peak amplitude for any
one circuit, as is shown in the lower figure at right.

Do you need four wires? In principle, no. The sum of the three V terms is zero
so, provided that the loads on each phase are identical, the currents drawn from
the three lines add to zero. In practice, the current in the neutral wire is
usually not quite zero. Further, it should be the same guage as the other wires
because, if one of the loads were to fail and form an open circuit, the neutral
would carry a current similar to that in the remaining two loads.
`
        }
      ]
    },
    {
      id: 10,
      name: "Capacitors",
      language: "markdown",
      tabs: [
        {
          image_src: "http://hyperphysics.phy-astr.gsu.edu/hbase/electric/imgele/capchg.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Capacitor

A capacitor is a passive two-terminal electronic component that stores
electrical energy in an electric field. The effect of a capacitor is known as
capacitance. While some capacitance exists between any two electrical conductors
in proximity in a circuit, a capacitor is a component designed to add
capacitance to a circuit.

The physical form and construction of practical capacitors vary widely and many
capacitor types are in common use. Most capacitors contain at least two
electrical conductors often in the form of metallic plates or surfaces separated
by a dielectric medium. A conductor may be a foil, thin film, sintered bead of
metal, or an electrolyte. The nonconducting dielectric acts to increase the
capacitor's charge capacity. Materials commonly used as dielectrics include
glass, ceramic, plastic film, paper, mica, and oxide layers. Capacitors are
widely used as parts of electrical circuits in many common electrical devices.
Unlike a resistor, an ideal capacitor does not dissipate energy.

When two conductors experience a potential difference, for example, when a
capacitor is attached across a battery, an electric field develops across the
dielectric, causing a net positive charge to collect on one plate and net
negative charge to collect on the other plate. No current actually flows through
the dielectric. However, there is a flow of charge through the source circuit.
If the condition is maintained sufficiently long, the current through the source
circuit ceases. If a time-varying voltage is applied across the leads of the
capacitor, the source experiences an ongoing current due to the charging and
discharging cycles of the capacitor.

Capacitance is defined as the ratio of the electric charge on each conductor to
the potential difference between them. The unit of capacitance in the
International System of Units (SI) is the farad (F), defined as one coulomb per
volt (1 C/V). Capacitance values of typical capacitors for use in general
electronics range from about 1 picofarad (pF) (10^−12 F) to about 1 millifarad
(mF) (10^−3 F).

The capacitance of a capacitor is proportional to the surface area of the plates
(conductors) and inversely related to the gap between them. In practice, the
dielectric between the plates passes a small amount of leakage current. It has
an electric field strength limit, known as the breakdown voltage. The conductors
and leads introduce an undesired inductance and resistance.

Capacitors are widely used in electronic circuits for blocking direct current
while allowing alternating current to pass. In analog filter networks, they
smooth the output of power supplies. In resonant circuits they tune radios to
particular frequencies. In electric power transmission systems, they stabilize
voltage and power flow.[2] The property of energy storage in capacitors was
exploited as dynamic memory in early digital computers.[3]

`
        }
      ]
    },
    {
      id: 11,
      name: "Inductors",
      language: "markdown",
      tabs: [
        {
          image_src: "http://hyperphysics.phy-astr.gsu.edu/hbase/electric/imgele/indt.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Inductor

An inductor, also called a coil, choke, or reactor, is a passive two-terminal
electrical component that stores energy in a magnetic field when electric
current flows through it.[1] An inductor typically consists of an insulated wire
wound into a coil around a core.

When the current flowing through an inductor changes, the time-varying magnetic
field induces an electromotive force (e.m.f.) (voltage) in the conductor,
described by Faraday's law of induction. According to Lenz's law, the induced
voltage has a polarity (direction) which opposes the change in current that
created it. As a result, inductors oppose any changes in current through them.

An inductor is characterized by its inductance, which is the ratio of the
voltage to the rate of change of current. In the International System of Units
(SI), the unit of inductance is the henry (H) named for 19th century American
scientist Joseph Henry. In the measurement of magnetic circuits, it is
equivalent to weber/ampere. Inductors have values that typically range from 1 µH
(10^−6 H) to 20 H. Many inductors have a magnetic core made of iron or ferrite
inside the coil, which serves to increase the magnetic field and thus the
inductance. Along with capacitors and resistors, inductors are one of the three
passive linear circuit elements that make up electronic circuits.

Inductors are widely used in alternating current (AC) electronic equipment,
particularly in radio equipment. They are used to block AC while allowing DC to
pass; inductors designed for this purpose are called chokes. They are also used
in electronic filters to separate signals of different frequencies, and in
combination with capacitors to make tuned circuits, used to tune radio and TV
receivers.

`
        }
      ]
    },
    {
      id: 12,
      name: "Ohms Law's Law (AC/DC)",
      language: "markdown",
      tabs: [
        {
          image_src: "http://www.electrical-formulas.com/wp-content/uploads/2018/03/ohms-law-formula-for-ac-circuits.jpg",
          name: "Question",
          data: " "
        }
      ]
    },
    {
      id: 13,
      name: "Apparent Power vs. Reactive Power vs. Real Power",
      language: "markdown",
      tabs: [
        {
          image_src: "https://qph.fs.quoracdn.net/main-qimg-78665340199ff07a8997527960f5f0eb",
          name: "Question",
          data:
`Source: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-11/true-reactive-and-apparent-power/

Apparent Power:
The combination of reactive power and true power is called apparent power, and
it is the product of a circuit’s voltage and current, without reference to phase
angle. Apparent power is measured in the unit of Volt-Amps (VA) and is
symbolized by the capital letter S.

Reactive Power:
We know that reactive loads such as inductors and capacitors dissipate zero
power, yet the fact that they drop voltage and draw current gives the deceptive
impression that they actually do dissipate power. This “phantom power” is called
reactive power, and it is measured in a unit called Volt-Amps-Reactive (VAR),
rather than watts. The mathematical symbol for reactive power is (unfortunately)
the capital letter Q.


True Power (Real Power):
The actual amount of power being used, or dissipated, in a circuit is called
true power, and it is measured in watts (symbolized by the capital letter P, as
always).

Calculating for Reactive, True, or Apparent Power
As a rule, true power is a function of a circuit’s dissipative elements, usually
resistances (R). Reactive power is a function of a circuit’s reactance (X).
Apparent power is a function of a circuit’s total impedance (Z). Since we’re
dealing with scalar quantities for power calculation, any complex starting
quantities such as voltage, current, and impedance must be represented by their
polar magnitudes, not by real or imaginary rectangular components. For instance,
if I’m calculating true power from current and resistance, I must use the polar
magnitude for current, and not merely the “real” or “imaginary” portion of the
current. If I’m calculating apparent power from voltage and impedance, both of
these formerly complex quantities must be reduced to their polar magnitudes for
the scalar arithmetic.

Equations:

P = True Power (Measured in Watts)
P = (I^2)R
P = (E^2)/R

Q = Reactive Power (Measured in Volt-Amps-Reactive (VAR))
Q = (I^2)X
Q = (E^2)/X

S = Apparent Power (Measured in Volt-Amps (VA))
S = (I^2)Z
S = (E^2)/Z
S = IE

`
        }
      ]
    },
    {
      id: 14,
      name: "Power Factor",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.marinerdesk.com/wp-content/uploads/2018/05/C8A48748-AFE0-4317-9B5C-32BCE5A25427.jpeg",
          name: "Question",
          data:
`Source: https://www.laurenselectric.com/home/business/understanding-power-factor/

Power factor is a measure of how effectively you are using electricity. Various
types of power are at work to provide us with electrical energy. Here is what
each one is doing.

Working Power – the “true” or “real” power used in all electrical appliances to
perform the work of heating, lighting, motion, etc. We express this as kW or
kilowatts. Common types of resistive loads are electric heating and lighting.

An inductive load, like a motor, compressor or ballast, also requires Reactive
Power to generate and sustain a magnetic field in order to operate. We call this
non-working power kVAR’s, or kilovolt-amperes-reactive.

Every home and business has both resistive and inductive loads. The ratio
between these two types of loads becomes important as you add more inductive
equipment. Working power and reactive power make up Apparent Power, which is
called kVA, kilovolt-amperes. We determine apparent power using the formula,
kVA2 = kV*A.

Going one step further, Power Factor (PF) is the ratio of working power to
apparent power, or the formula PF = kW / kVA. A high PF benefits both the
customer and utility, while a low PF indicates poor utilization of electrical
power.

`
        }
      ]
    },
    {
      id: 15,
      name: "Resonant Circuits",
      language: "markdown",
      tabs: [
        {
          image_src: "http://hyperphysics.phy-astr.gsu.edu/hbase/electric/imgele/acres.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Electrical_resonance

Electrical resonance occurs in an electric circuit at a particular resonant
frequency when the impedances or admittances of circuit elements cancel each
other. In some circuits, this happens when the impedance between the input and
output of the circuit is almost zero and the transfer function is close to one.
[1]

Resonant circuits exhibit ringing and can generate higher voltages and currents
than are fed into them. They are widely used in wireless (radio) transmission
for both transmission and reception.

`
        }
      ]
    },
    {
      id: 16,
      name: "Passive Filters",
      language: "markdown",
      tabs: [
        {
          image_src: "https://sub.allaboutcircuits.com/images/quiz/02098x02.png",
          name: "Question",
          data:
`Source: `
        }
      ]
    },
    {
      id: 17,
      name: "Phasor Diagram",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.electronics-tutorials.ws/accircuits/acp25.gif",
          name: "Question",
          data:
`Source: https://www.electronics-tutorials.ws/accircuits/phasors.html

Phasor Diagrams are a graphical way of representing the magnitude and
directional relationship between two or more alternating quantities
`
        }
      ]
    },
    {
      id: 18,
      name: "Impedance (Resistors, Capacitors, Inductors)",
      language: "markdown",
      tabs: [
        {
          image_src: "http://www.animations.physics.unsw.edu.au/jw/images/AC_files/AC5.gif",
          name: "Question",
          data:
`Source: http://www.animations.physics.unsw.edu.au/jw/AC.html

The ratio of voltage to current in a resistor is its
resistance. Resistance does not depend on frequency, and in resistors the two
are in phase.

So impedance is the general name we give to the ratio of voltage to current. It
has the symbol Z. Resistance is a special case of impedance. Another special
case is that in which the voltage and current are out of phase by 90°: this is
an important case because when this happens, no power is lost in the circuit. In
this case where the voltage and current are out of phase by 90°, the ratio of
voltage to current is called the reactance, and it has the symbol X.


The impedance is the general term for the ratio of voltage to current.
Resistance is the special case of impedance when φ = 0, reactance the special
case when φ = ± 90°. It is easy to remember that the voltage on the capacitor is
behind the current, because the charge doesn't build up until after the current
has been flowing for a while.

It is easy to remember the frequency dependence by thinking of the DC (zero
frequency) behaviour: at DC, an inductance is a short circuit (a piece of wire)
so its impedance is zero. At DC, a capacitor is an open circuit, as its circuit
diagram shows, so its impedance goes to infinity.

the capacitive reactance Xc as the ratio of the magnitude of the voltage to
magnitude of the current in a capacitor. From the equation above, we see that
Xc = 1/ωC. Now we can rewrite the equation above to make it look like Ohm's law.
The voltage is proportional to the current, and the peak voltage and current are
related by:

Vm = Xc * Im

For a capacitor, the ratio of voltage to current decreases with frequency.

We define the inductive reactance Xl as the ratio of the magnitudes of the
voltage and current, and from the equation above we see that Xl = ωL. Again we
note the analogy to Ohm's law: the voltage is proportional to the current, and
the peak voltage and currents are related by:

Vm = Xl * Im

For an inductor, the ratio of voltage to current increases with frequency

(Note: Vm and Im are peak values)


Complex impedance (use the complex plane)
Xl  =  jωL
Xc  =  -j*(1/ωC)  =  1/jωC (the capacitor has a negative imaginary impedance)

The algebra is relatively simple. The magnitude of any complex quantity gives
the magnitude of the quantity it represents, the phase angle its phase angle.
Its real component is the component in phase with the reference phase, and the
imaginary component is the component that is 90° ahead.

`
        }
      ]
    },
    {
      id: 19,
      name: "Maxwell's Equations",
      language: "markdown",
      tabs: [
        {
          image_src: "https://i.pinimg.com/474x/b1/9e/d0/b19ed0daaac29aff3c97f81ff163f344--physics-formulas-mathematics.jpg",
          name: "Question",
          data:
` `
        }
      ]
    },
    {
      id: 20,
      name: "Types of Motors",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.rs-online.com/designspark/rel-assets/ds-assets/uploads/images/57178c912bb04bf78f67613d0ab544b9Types%20of%20Motor.JPG",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Electric_motor

An electric motor is an electrical machine that converts electrical energy into
mechanical energy. Most electric motors operate through the interaction between
the motor's magnetic field and winding currents to generate force in the form of
rotation. Electric motors can be powered by direct current (DC) sources, such as
from batteries, motor vehicles or rectifiers, or by alternating current (AC)
sources, such as a power grid, inverters or electrical generators. An electric
generator is mechanically identical to an electric motor, but operates in the
reverse direction, accepting mechanical energy (such as from flowing water) and
converting this mechanical energy into electrical energy.

Electric motors may be classified by considerations such as power source type,
internal construction, application and type of motion output. In addition to AC
versus DC types, motors may be brushed or brushless, may be of various phase
(see single-phase, two-phase, or three-phase), and may be either air-cooled or
liquid-cooled. General-purpose motors with standard dimensions and
characteristics provide convenient mechanical power for industrial use. The
largest electric motors are used for ship propulsion, pipeline compression and
pumped-storage applications with ratings reaching 100 megawatts. Electric motors
are found in industrial fans, blowers and pumps, machine tools, household
appliances, power tools and disk drives. Small motors may be found in electric
watches.

In certain applications, such as in regenerative braking with traction motors,
electric motors can be used in reverse as generators to recover energy that
might otherwise be lost as heat and friction.

Electric motors produce linear or rotary force (torque) and can be distinguished
from devices such as magnetic solenoids and loudspeakers that convert
electricity into motion but do not generate usable mechanical force, which are
respectively referred to as actuators and transducers.
`
        }
      ]
    },
    {
      id: 21,
      name: "Transistors",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.electronics-tutorials.ws/transistor/tran22.gif",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Transistor

A transistor is a semiconductor device used to amplify or switch electronic
signals and electrical power. It is composed of semiconductor material usually
with at least three terminals for connection to an external circuit. A voltage
or current applied to one pair of the transistor's terminals controls the
current through another pair of terminals. Because the controlled (output) power
can be higher than the controlling (input) power, a transistor can amplify a
signal. Today, some transistors are packaged individually, but many more are
found embedded in integrated circuits.

The transistor is the fundamental building block of modern electronic devices,
and is ubiquitous in modern electronic systems. Julius Edgar Lilienfeld patented
a field-effect transistor in 1926[1] but it was not possible to actually
construct a working device at that time. The first practically implemented
device was a point-contact transistor invented in 1947 by American physicists
John Bardeen, Walter Brattain, and William Shockley. The transistor
revolutionized the field of electronics, and paved the way for smaller and
cheaper radios, calculators, and computers, among other things. The transistor
is on the list of IEEE milestones in electronics,[2] and Bardeen, Brattain, and
Shockley shared the 1956 Nobel Prize in Physics for their achievement.[3]

Most transistors are made from very pure silicon or germanium, but certain other
semiconductor materials can also be used. A transistor may have only one kind of
charge carrier, in a field effect transistor, or may have two kinds of charge
carriers in bipolar junction transistor devices. Compared with the vacuum tube,
transistors are generally smaller, and require less power to operate. Certain
vacuum tubes have advantages over transistors at very high operating frequencies
or high operating voltages. Many types of transistors are made to standardized
specifications by multiple manufacturers.

* Simplified operation *

The essential usefulness of a transistor comes from its ability to use a small
signal applied between one pair of its terminals to control a much larger signal
at another pair of terminals. This property is called gain. It can produce a
stronger output signal, a voltage or current, which is proportional to a weaker
input signal; that is, it can act as an amplifier. Alternatively, the transistor
can be used to turn current on or off in a circuit as an electrically controlled
switch, where the amount of current is determined by other circuit elements.

There are two types of transistors, which have slight differences in how they
are used in a circuit. A bipolar transistor has terminals labeled base,
collector, and emitter. A small current at the base terminal (that is, flowing
between the base and the emitter) can control or switch a much larger current
between the collector and emitter terminals. For a field-effect transistor, the
terminals are labeled gate, source, and drain, and a voltage at the gate can
control a current between source and drain.
`
        }
      ]
    },
    {
      id: 22,
      name: "Transformer Types and Applications",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.electronics-tutorials.ws/transformer/trans65.gif",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Transformer

A transformer is a static electrical device that transfers electrical energy
between two or more circuits. A varying current in one coil of the transformer
produces a varying magnetic flux, which, in turn, induces a varying
electromotive force across a second coil wound around the same core. Electrical
energy can be transferred between the two coils, without a metallic connection
between the two circuits. Faraday's law of induction discovered in 1831
described the induced voltage effect in any coil due to changing magnetic flux
encircled by the coil.

Transformers are used for increasing or decreasing the alternating voltages in
electric power applications, and for coupling the stages of signal processing
circuits.

Since the invention of the first constant-potential transformer in 1885,
transformers have become essential for the transmission, distribution, and
utilization of alternating current electric power.[3] A wide range of
transformer designs is encountered in electronic and electric power
applications. Transformers range in size from RF transformers less than a cubic
centimeter in volume, to units weighing hundreds of tons used to interconnect
the power grid.
`
        }
      ]
    },
    {
      id: 23,
      name: "Electricity Distribution",
      language: "markdown",
      tabs: [
        {
          image_src: "http://waterheatertimer.org/images/Electricity-from-plant-to-distribution-transformer-to-business.jpg",
          name: "Question",
          data:
`Source:
`
        }
      ]
    },
    {
      id: 24,
      name: "Oscillator Circuits (Harmonic)",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Electronic_oscillator
Oscillators
	•	Harmonic Oscillator: produces sinusoidal output 
	  ◦	Feedback oscillator 
	    ▪	RC Oscillator Circuit: the filter is a network of resistors and
        capacitors 
	      ▪	RC oscillators are mostly used to generate lower frequencies, for
          example in the audio range. 
	    ▪	LC Oscillator Circuit: the filter is a tuned circuit (often called a
        tank circuit; the tuned circuit is a resonator) consisting of an
        inductor (L) and capacitor (C) connected together. 
	      ▪	LC oscillators are often used at radio frequencies,[2] when a tunable
          frequency source is necessary, such as in signal generators, tunable
          radio transmitters and the local oscillators in radio receivers. 
	    ▪	Crystal Oscillator Circuit: the filter is a piezoelectric crystal
        (commonly a quartz crystal). 
	      ▪	Crystal oscillators are the most common type of linear oscillator,
          used to stabilize the frequency of most radio transmitters, and to
          generate the clock signal in computers and quartz clocks. Crystal
          oscillators often use the same circuits as LC oscillators, with the
          crystal replacing the tuned circuit;[2] 
	  ◦	Negative-resistance oscillator 
	•	Relaxation Oscillator: non-sinusoidal output, such as a square, sawtooth or
    triangle wave. 
	•	Voltage-Controlled Oscillator (VCO) The oscillation frequency can be varied
    over some range by an input voltage or current. 
`
        }
      ]
    },
    {
      id: 25,
      name: "Sensors",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.azosensors.com/images/Article_Images/ImageForArticle_583(1).jpg",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Sensor

In the broadest definition, a sensor is a device, module, or subsystem whose
purpose is to detect events or changes in its environment and send the
information to other electronics, frequently a computer processor. A sensor is
always used with other electronics.

Sensors are used in everyday objects such as touch-sensitive elevator buttons
(tactile sensor) and lamps which dim or brighten by touching the base, besides
innumerable applications of which most people are never aware. With advances in
micromachinery and easy-to-use microcontroller platforms, the uses of sensors
have expanded beyond the traditional fields of temperature, pressure or flow
measurement,[1] for example into MARG sensors. Moreover, analog sensors such as
potentiometers and force-sensing resistors are still widely used. Applications
include manufacturing and machinery, airplanes and aerospace, cars, medicine,
robotics and many other aspects of our day-to-day life.

A sensor's sensitivity indicates how much the sensor's output changes when the
input quantity being measured changes. For instance, if the mercury in a
thermometer moves 1  cm when the temperature changes by 1 °C, the sensitivity is
1 cm/°C (it is basically the slope Dy/Dx assuming a linear characteristic). Some
sensors can also affect what they measure; for instance, a room temperature
thermometer inserted into a hot cup of liquid cools the liquid while the liquid
heats the thermometer. Sensors are usually designed to have a small effect on
what is measured; making the sensor smaller often improves this and may
introduce other advantages.[2] Technological progress allows more and more
sensors to be manufactured on a microscopic scale as microsensors using MEMS
technology. In most cases, a microsensor reaches a significantly higher speed
and sensitivity compared with macroscopic approaches.[3][4]

`
        }
      ]
    },
    {
      id: 26,
      name: "Electronic Switches",
      language: "markdown",
      tabs: [
        {
          image_src: "https://micro.rohm.com/en/techweb/knowledge/si/s-si/03-s-si/4778",
          name: "Question",
          data:
`Electronic Switches
	•	Vacuum tubes 
	•	Relay: Source: https://en.wikipedia.org/wiki/Relay#Applications 
	  ◦	Relays are used wherever it is necessary to control a high power or high
      voltage circuit with a low power circuit, especially when galvanic
      isolation is desirable. 
	•	Transistors: Source: https://en.wikipedia.org/wiki/Transistor 
	  ◦	A transistor is a semiconductor device used to amplify or switch
      electronic signals and electrical power.
`
        }
      ]
    },
    {
      id: 27,
      name: "Laplace vs. Fourier vs. Z transforms",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.quora.com/What-is-the-difference-between-Laplace-and-Fourier-and-z-transforms

The Laplace and Fourier transforms are continuous (integral) transforms of
continuous functions.

The Laplace transform maps a function 𝑓(𝑡) to a function F(s)𝐹(𝑠) of the complex
variable s, where 𝑠=σ+𝑗ω.

Since the derivative 𝑓˙(𝑡)=𝑑𝑓(𝑡)/𝑑𝑡 maps to 𝑠𝐹(𝑠), the Laplace transform of a
linear differential equation is an algebraic equation. Thus, the Laplace
transform is useful for, among other things, solving linear differential
equations.

If we set the real part of the complex variable s to zero, σ=0, the result is
the Fourier transform 𝐹(𝑗ω) which is essentially the frequency domain
representation of 𝑓(𝑡) (note that this is true only if for that value of σσ the
formula to obtain the Laplace transform of 𝑓(𝑡) exists, i.e., it does not go to
infinity).

The Z transform is essentially a discrete version of the Laplace transform and,
thus, can be useful in solving difference equations, the discrete version of
differential equations. The Z transform maps a sequence 𝑓[𝑛] to a continuous
function 𝐹(𝑧) of the complex variable 𝑧=𝑟𝑒𝑗Ω.

If we set the magnitude of z to unity, 𝑟=1, the result is the Discrete Time
Fourier Transform (DTFT) 𝐹(𝑗Ω) which is essentially the frequency domain
representation of 𝑓[𝑛].

`
        }
      ]
    }
  ]
};
