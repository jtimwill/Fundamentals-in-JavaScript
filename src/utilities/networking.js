export default {
  name: "Networking",
  data: [
    {
      id: 0,
      name: "OSI vs TCP/IP",
      language: "js",
      tabs: [
        {
          image_src: "https://www.inetdaemon.com/img/network_models.png",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Summary of 4 Layer Model

•	Application: Bidirectional reliable byte stream between two applications,
               using application-specific semantics (e.g. http, bit-torrent)
•	Transport: Guarantees correct, in-order delivery of data end-to-end. Controls
             congestion.
•	Network: Delivers datagrams end-to-end. Best-effort delivery -no guarantees.
           Must be the Internet protocol (IP)
•	Link: Delivers data over a single link between an end host and router, or
        between routers

The network layer is “special”
	•	We must use the Internet Protocol (IP) 
	  ◦	IP makes a best-effort attempt to deliver our datagrams to the other end,
      but it makes no promises. 
	  ◦	IP datagrams can get lost, can be delivered out of order, and can be
      corrupted. There are no guarantees. 
`
        }
      ]
    },
    {
      id: 1,
      name: "IP",
      language: "js",
      tabs: [
        {
          image_src: "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2011/howtheintern.jpg",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

IP is the “thin waist” [only one protocol option for network layer]

`
        }
      ]
    },
    {
      id: 2,
      name: "TCP vs UDP",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 3,
      name: "IPv4/IPv6 Address Assignment",
      language: "js",
      tabs: [
        {
          name: "Question",
          data: "Answer"
        }
      ]
    },
    {
      id: 4,
      name: "ARP",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 5,
      name: "ICMP",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 6,
      name: "End-to-end Principle",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

The end-to-end principle:
“The function in question can completely and correctly be implemented only with
the knowledge and help of the application standing at the end points of the
communication system. Therefore, providing that questioned function as a feature
of the communication system itself is not possible. (Sometimes an incomplete
version of the function provided by the communication system may be useful as a
performance enhancement.) We call this line of reasoning. . . “the end-to-end
argument.”

- The end-to-end principle was first described by Saltzer, Reed and Clark (
  End-to-end Arguments in System Design, 1984)

Put another way:
	•	The network could possibly do all kinds of things to help, but that’s all it
    can do -- help. 
	•	If the system is going to work correctly, then the endpoints need to be
    responsible for making sure it does. 
	•	Nobody else has the information necessary to do this correctly. 
	•	The network can help you, but you can’t depend on it. 

“Strong” End to End
Second version of the end-to-end principle, described in the IETF request for
comments number 1958, “The Architectural Principles of the Internet.”
	•	We call it the “strong” end-to-end principle: 
	  ◦	“The network’s job is to transmit datagrams as efficiently and flexibly as
       possible. Everything else should be done at the fringes...” 
	•	This end-to-end principle is stronger than the first one. 
	  ◦	The first one said that you have to implement something end-to-end, at the
      fringes, but that you can also implement it in the middle for performance
      improvements. 
	•	This principle says to NOT implement it in the middle. Only implement it at
    the fringes. 
	  ◦	The reasoning for the strong principle is flexibility and simplicity. If
      the network implements a piece of functionality to try to help the
      endpoints, then it is assuming what the endpoints do. 
`
        }
      ]
    },
    {
      id: 7,
      name: "Three Error Detection Algorithms",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Networks today generally use three different error detection algorithms:
checksums, cyclic redundancy codes, CRCs, and message authentication codes,
MACs. Each of them has very different characteristics.

At a high level, error detection looks like this. We have a payload of data. We
calculate some error detection bits over that data and either append it or
prepend it to the payload.
	•	TLS: appends the MAC in the footer (follows the payload) 
	•	IP: prepends a checksum, which it places in the IP header 
	•	Ethernet: appends the CRC in the footer (follows the payload) 

  Three Error Detection Schemes
  	•	Checksum: adds up values in packet (IP, TCP) 
  	  ◦	Very fast, cheap to compute even in software 
  	    ▪	You just add all of the data in the packet. It’s what TCP and IP use.
          Checksums are nice because they are very fast and cheap to compute,
          even in software. Back when the Internet started and everything was in
          software, this was valuable. 
  	  ◦	Not very robust 
  	    ▪	Their major drawback is that they have pretty weak error detection
          guarantees. While they can catch a lot of random errors, it’s easy to
          fool a checksum with as few as 2 bit errors, if the two bit errors
          cancel each other out. 
  	    ▪	For example, if one bit error adds 32 and another bit error subtracts
          32, then a checksum won’t catch the error. So a checksum can catch a
          lot of errors, but it turns out to have very weak guarantees on what
          errors it will catch. 

  	•	Cyclic redundancy code: computes remainder of a polynomial (Ethernet) 
  	  ◦	More expensive than checksum (easy today, easy in hardware) 
  	    ▪	A CRC is much more computationally expensive than a checksum, but also
          much more robust. It computes the remainder of a polynomial. With
          today’s processors, it’s easy to do, and it’s easy to do in hardware. 
  	    ▪	It’s what Ethernet and many link layers use. In some ways, TCP and IP
          can get away with checksums because the link layers use CRCs. 
    	◦	Protects against any 2-bit error, any burst ≤ c bits long, any odd
        number or errors 
    	  ▪	If you have a CRC that’s c bits long, a CRC can detect any 1 bit
          error, any 2 bit error, and single burst of errors less than or equal
          to c bits long, and any odd number of errors. 
    	  ▪	So it can provide much stronger guarantees that a checksum. 
  	•	Message authentication code: cryptographic transformation of data (TLS) 
  	  ◦	Robust to malicious modifications, but not errors 
  	    ▪	A message authentication code combines the packet with some secret
          information to generate a value. In theory, someone can only generate
          or check the MAC if they have the secret. So if you receive a packet
          and its MAC is correct, then you’re pretty sure the computer that
          computed the MAC has the secret. 
  	    ▪	Message authentication codes are therefore robust to malicious
          modifications. Message authentication codes are used in Transport
          Layer Security, TLS, which is what you use when you browse web pages
          securely (https). 
  	  ◦	If strong, any 2 messages have a 2-c chance of having same code 
  	    ▪	But they’re actually not great for catching errors. If I flip a single
          bit in a packet, there's a 1 in 2c chance that the changed packet will
          have the same MAC! 
  	    ▪	I’ve seen people make this mistake when talking about error
          correction, thinking a MAC is just as good as a CRC. It’s not! If I
          have a 16-bit CRC, I’m assured that I will detect a burst of errors
          that is 16 bits long or shorter. If I have a 16-bit MAC, I’m only
          assured that I’ll detect bit errors with very high probability, 99.998
          percent, or one in 65,536. That’s high, but think about how many
          packets you’ve received just watching this video... 
`
        }
      ]
    },
    {
      id: 8,
      name: "Packet",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Packet: a self-contained unit of data that carries information necessary for it
        to reach its destination
`
        }
      ]
    },
    {
      id: 9,
      name: "Packet Switching",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Packet Switching: independently for each arriving packet, pick its outgoing
                  link. If the link is free, send it. Else hold the packet for
                  later

Types of packet switches: routers/gateways, Ethernet switches,...

Source Routing: Each packet contains an explicit route, specifying the IDs of
each packet switch along the way. We call this “self routing” or source routing
because the source specifies whole the route.
  a. The Internet supports source routing, but it is generally turned off
     because it raises big security issues. 
  b. People who own routers don’t want you telling them how to send packets,
     because maybe you can trick them into sending them somewhere they
     shouldn’t, such as secure computers 

What the Internet Does Today: places a small amount of state in each switch
which tells it which next hop to send packets to.
  a. For example: a switch can have a table of destination addresses and the
     next hop. When it receives a packet, it looks up the address in the table,
     and sends the packet to the appropriate next hop. All the packet needs to
     carry is the destination address. 

Consequences of Packet Switching
	1. Packet switches are simple: they forward packets independently, and they
     don’t need to know about flows (each packet is self-contained) 
  	 a. No per-flow state to be added/removed 
  	 b. No per-flow state to be stored 
  	 c. No per-flow state to be changed upon failure 
	2. Packet switching is efficient: It lets us efficiently share capacity among
     many flows sharing the link 
	   a. Data traffic is bursty 
	      1. If we reserved a fraction of the links for each flow, the links would
           be used inefficiently 
	      2. Packet switching allows flows to use all available link capacity 
	      3. Packet switching allows flows to share link capacity 
	    b. This is called Statistical Multiplexing 
	      1. Statistical because each user receives a statistical share of the
           resource based on how much others are using it 
	3. Packet switching can potentially help the network recover quickly from
     failures: 
	   a. the simple forwarding paradigm, with no per-flow state in each router,
        makes it easier to quickly route around link and router failures.
`
        }
      ]
    },
    {
      id: 10,
      name: "Forwarding Table",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 11,
      name: "Ethernet Switch vs. Internet Router",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 12,
      name: "NATs and the New Hourglass",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 13,
      name: "HTTP",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 14,
      name: "DNS Architecture",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 15,
      name: "DHCP",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 16,
      name: "Internet Routing Protocols",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 17,
      name: "Internet Structure",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 18,
      name: "Shannon Capacity, Shannon Limit",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Shannon Capacity: Claude Shannon created the wonderfully powerful field of
                  information theory, and the centerpiece of his work was
                  deducing the maximum error-free rate that a channel can
                  communicate at (the Shannon Capacity)
	•	The Shannon capacity provides a fundamental, inescapable limit to the
    maximum rate information can be carried over a channel, regardless of the
    clever coding schemes we invent. 

Shannon Limit
	•	There is a theoretical limit on how much information a channel can carry
    (Shannon limit) 
	  ◦	In this case, channel means a medium in which you’re putting your
      information 
	  ◦	It could be a wire, wireless, sound waves, etc. 
	•	Channel capacity = B log2(1 + S/N) 
	  ◦	B is Bandwidth of your communication (the range of frequencies you can
      use) 
	    ▪	Bandwidth typically fixed (By FCC for example)
	  ◦	S is Signal strength (How strong the signal is when it arrives at the
      receiver) 
	    ▪	Stronger signal means you can transmit data faster
	      •	Shorter symbols (you can transmit them for shorter periods of time)
	      •	More bits per symbol (denser constellation)
	  ◦	N is Noise (all communication devices have noise) 
	    ▪	Often the noise is just due to the thermal properties of the hardware.
        There are just stray electrons from thermal effects that introduce some
        noise into the system. 
	•	Higher S/N requires lower noise (better/more expensive hardware), or
    stronger signal (higher voltages) 
	•	Building hardware for very high bandwidths is difficult 
  •	Possible data rate bounded by the signal to noise ratio (SNR)
`
        }
      ]
    },
    {
      id: 19,
      name: "Modulation",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 20,
      name: "Coding (list a few algorithms)",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 21,
      name: "Why is data transmitted using a clock? (Lower Layers)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Whenever we send data over a link we normally assume a data rate like 10Mb/s.
When we send at 10Mb/s we’re assuming that each bit lasts 100ns or that there
are 10 million of them per second. So there must be some notion of a clock. A
clock was used by the transmitter in order to send those bits in the first
place. The receiver needs to know that clock, in order to correctly decode the
bits.

Problem: there is no universal reference for a clock which is precisely the same
in two places.
	•	So the the transmitter clock frequency is not precisely known by the
    receiver. The receiver has to figure it out, so it can determine when one
    bit ends, and another begins. 

Data is transmitted using a clock
  •	We always send data using a clock, because we want it to have a particular
    frequency 
  •	Ideally, there would be a wire connecting the transmitter and receiver
    clocks, however, in most cases we can’t afford to do that. It is much more
    efficient to just send one of them (hint: the data signal). 
`
        }
      ]
    },
    {
      id: 22,
      name: "What are Asynchronous communications? (computer networking)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Asynchronous communication (works for short packets)
	•	For very short communications, as long as we know nominally that the
    transmitter and receiver clocks are about the same, we can make this work. 
	  ◦	If you keep the packet length short enough and you know and the tolerance
      between the Tx and Rx clocks, we can reliably decode packets 
	  ◦	This doesn’t work for much longer packets 
	    ▪	If the packet was thousands or hundreds of thousands of bits long the
        tolerance of the receive clock would have to be impractically tight 
￼
	•	Asynchronous communications sometimes used for links with short packets   
	  ◦	e.g. IR remote control, serial links 
	    ▪	Was used on the serial bus that connects computers (not much anymore) 
`
        }
      ]
    },
    {
      id: 23,
      name: "What are Synchronous communications? (computer networking)",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about
* See Diagram in Networking Notes II *

•	Server A is sending to the router on the right 
•	The host and the router are using locally generated clocks with the same
  nominal frequency, but slightly different 
•	The network link is 10Mb/s (because sending data with a 10MHz clock) 
•	The clock recovery unit (or clock recovery circuit) takes the incoming signal
  and determines the sender’s clock. It does this by examining the frequency and
  the phase of the arriving bits 
  ◦	So, while the bit pattern can be anything, if there’s a strong enough
    component in the spectrum from the sender’s clock of what the frequency was,
    its receiver will find it and use it to sample the bits. 
  ◦	There are many types of circuits that are used for clock recovery units, but
    the most common one is a phase locked loop or PLL. 
    ▪	Delay locked loops (DLLs) are kind of a digital equivalent 
    ▪	They could also be a very precise filter. 
      ▪	There’s something called a SAW filter or surface acoustic wave which is
        also used as a clock recovery device. 
•	The flip-flop is used by the receiver to clock the data in 
  ◦	It’s labeled sender’s clock because the clock recovery unit figured out what
    the sender’s clock was 
•	Even though we’ve used the sender’s clock to recover the data, we need to
  process it using the clock that’s been locally generated using an oscillator
  that’s running inside the router 
  ◦	The clock of the transmitter is not much use to us at the receiver, if we’re
    wanting to process the data, in order to calculate checksums, and
    re-transmit the data according to our local clock. 
•	In order to clock the signal in, once the data has been sampled by the flip
  flop, it’s placed into a small fifio. 
  ◦	This fifo is very critical to how the whole system works. The FIFO is a
    special circuit that helps us take the bits from the sender’s clock domain
    into the receiver’s clock domain. 
  ◦	The bits are written into the FIFO using the transmitter’s clock. Then, the
    bits are read out of the FIFO using the receiver’s clock. 
  ◦	Note: with the FIFOs we used before, we assumed that the clock was the same
    on both sides. This FIFO is carefully designed to allow the use of two
    clocks 
  ◦	This FIFO is called an elasticity buffer because it’s taking up the slack
    between two clocks. The whole system is designed to so that we never
    overflow or underflow this elasticity buffer. 
`
        }
      ]
    },
    {
      id: 24,
      name: "How is the radio spectrum allocated in the US (that big map)?",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 25,
      name: "How does Signal Strength work with wireless?",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 26,
      name: "Ethernet, Ethernet most commonly used wired network",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 27,
      name: "Ethernet Hubs vs. Switches",
      language: "js",
      tabs: [{name: "Question", data: "Answer"}]
    },
    {
      id: 28,
      name: "Three Ways Communication Can Be Compromised",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

1. Eavesdrop: Passively “sniff” and record network data (or metadata). This is
   the simplest way. 
   1. For example: (note: in each case, the attacker can use standard tools,
      such as Wireshark, to decode protocols and understand the user’s data) 
      a. Passively tap an electrical or optical cable 
      b. Listen in to WiFi (as we did in class, using Wireshark) 
         1. Recall that the packets are broadcast for everyone to hear 
      c. Compromise a router to duplicate and forward data. 
2. Modify, delete, insert data as it passes through the network: Actively tamper
   with data by: 
   a. Changing contents of packets. 
   b. Redirect packets to another server. 
   c. Take over control of an end-host. 

   •	Note: this might happen by persuading us to download malware based on a
            phishing attack, or by exploiting a vulnerability in our computer,
            or the way we communicate. 
3. Prevent communication: Usually called “denial of service”.
`
        }
      ]
    },
    {
      id: 29,
      name: "Three Security Principles",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Principles
Three basic security principles can empower you to build secure systems, even in
the face of such attacks
	•	Confidentiality: lets you communicate secretly, even if someone else can
    read your messages 
	•	Integrity: lets you be sure that no-one has tampered with your data along
    the way 
	•	Authenticity: lets you be sure that the other party has a secret 
	  ◦	You can’t be sure who the other party is, but you can at least be sure
      that they have a secret only someone you trust has. 

Tools
	•	Symmetric cryptography 
	•	Block ciphers (EBC mode, CBC mode)  [confidentiality]
	•	Cryptographic hashes: collision resistance  (integrity)
	•	Message authentication codes  (integrity, and authenticity)
	•	Public key cryptography 
	  ◦	Information encrypted with the public key can only be decrypted with the
      private key. So, you can share public key freely, and everyone else can
      send you encrypted data, but only you can read it. 
	•	Signatures and certificates 
	  ◦	Certificates are another very common security primitive. You use them
      every time you establish an SSH or HTTP session.
`
        }
      ]
    },
    {
      id: 30,
      name: "The most important network security lesson",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Most Important Lesson
	•	In security, it’s very easy to make a mistake. 
	  ◦	So, don’t try to implement these mechanisms yourself. It’s too easy to
      miss a detail that turns out to be a vulnerability. 
	•	Use existing, open source implementations of cryptosystems. 
	  ◦	Use well-tested and well-understood approaches that people have examined
      for a long time. 
	•	Be careful, and follow best practices.
`
        }
      ]
    },
    {
      id: 31,
      name: "Wireless Communication: Digital vs. Analog",
      language: "js",
      tabs: [
        {
          image_src: "https://image.slidesharecdn.com/atihighlevelwirelessdigitalcommunicationscoursesampler-120604124936-phpapp02/95/highlevel-wireless-digital-communications-for-program-and-engineering-managers-course-sampler-4-728.jpg?cb=1338814238",
          name: "Digital Wireless Communication",
          data:
`Source:
`
        },
        {
          image_src: "https://www.dummies.com/wp-content/uploads/309525.image0.jpg",
          name: "Analog Radio Transmitters ",
          data:
`Source: https://www.dummies.com/programming/electronics/components/radio-electronics-transmitters-and-receivers/

Radio Transmitters 
  ◦	Power supply: Provides the necessary electrical power to operate the
                  transmitter. 
  ◦	Oscillator: Creates alternating current at the frequency on which the
                transmitter will transmit. The oscillator usually generates a
                sine wave, which is referred to as a carrier wave. 
  ◦	Modulator: Adds useful information to the carrier wave. There are two main
               ways to add this information. The first, called amplitude
               modulation or AM, makes slight increases or decreases to the
               intensity of the carrier wave. The second, called frequency
               modulation or FM, makes slight increases or decreases the
               frequency of the carrier wave. 
  ◦	Amplifier: Amplifies the modulated carrier wave to increase its power. The
               more powerful the amplifier, the more powerful the broadcast.
  ◦	Antenna: Converts the amplified signal to radio waves.
`
        },
        {
          image_src: "https://www.dummies.com/wp-content/uploads/309526.image1.jpg",
          name: "Analog Radio Receivers",
          data:
`Source: https://www.dummies.com/programming/electronics/components/radio-electronics-transmitters-and-receivers/

Radio Receivers
  ◦	Antenna: Captures the radio waves. Typically, the antenna is simply a length
             of wire. When this wire is exposed to radio waves, the waves induce
             a very small alternating current in the antenna. 
  ◦	RF amplifier: A sensitive amplifier that amplifies the very weak radio
                  frequency (RF) signal from the antenna so that the signal can
                  be processed by the tuner. 
  ◦	Tuner: A circuit that can extract signals of a particular frequency from a
           mix of signals of different frequencies. On its own, the antenna
           captures radio waves of all frequencies and sends them to the RF
           amplifier, which dutifully amplifies them all. 
  ◦	Unless you want to listen to every radio channel at the same time, you need
    a circuit that can pick out just the signals for the channel you want to
    hear. That’s the role of the tuner. 
  ◦	The tuner usually employs the combination of an inductor (for example, a
    coil) and a capacitor to form a circuit that resonates at a particular
    frequency. This frequency, called the resonant frequency, is determined by
    the values chosen for the coil and the capacitor. This type of circuit tends
    to block any AC signals at a frequency above or below the resonant
    frequency. 
  ◦	You can adjust the resonant frequency by varying the amount of inductance in
    the coil or the capacitance of the capacitor. In simple radio receiver
    circuits, the tuning is adjusted by varying the number of turns of wire in
    the coil. More sophisticated tuners use a variable capacitor (also called a
    tuning capacitor) to vary the frequency. 
  ◦	Detector: Responsible for separating the audio information from the carrier
              wave. For AM signals, this can be done with a diode that just
              rectifies the alternating current signal. What’s left after the
              diode has its way with the alternating current signal is a direct
              current signal that can be fed to an audio amplifier circuit. For
              FM signals, the detector circuit is a little more complicated.
  ◦	Audio amplifier: This component’s job is to amplify the weak signal that
                     comes from the detector so that it can be heard. This can
                     be done using a simple transistor amplifier circuit.
`
        }
      ]
    },
    {
      id: 32,
      name: "Wired Communication: Sync Serial vs. Async Serial vs. Parallel",
      language: "js",
      tabs: [
        {
          image_src: "https://cdn.sparkfun.com/assets/e/5/4/2/a/50e1ccf1ce395f962b000000.png",
          name: "Serial Communication",
          data:
`Source: https://en.wikipedia.org/wiki/Serial_communication

Serial Communication
  ◦	serial communication is the process of sending data one bit at a time, sequentially, over a communication channel or computer bus. 
  ◦	Application examples: 
    ▪	Practically all long-distance communication transmits data one bit at a
      time, rather than in parallel, because it reduces the cost of the cable. 
    ▪	Keyboard and mouse cables and ports are almost invariably serial—such as
      PS/2 port and Apple Desktop Bus and USB. 
    ▪	The cables that carry digital video are almost invariably serial—such as
      coax cableplugged into a HD-SDI port, a webcam plugged into a USB port or
      Firewire port, Ethernet cable connecting an IP camera to a Power over
      Ethernet port, FPD-Link, etc. 
    ▪	Other such cables and ports, transmitting data one bit at a time, include
      Serial ATA, Serial SCSI, Ethernet cable plugged into Ethernet ports, the
      Display Data Channel using previously reserved pins of the VGA connector
      or the DVI port or the HDMI port. 
    ▪	Serial communication is used for all long-haul communication and most
      computer networks, where the cost of cable and synchronization
      difficulties make parallel communication impractical. 
    ▪	Serial computer buses are becoming more common even at shorter distances,
      as improved signal integrity and transmission speeds in newer serial
      technologies have begun to outweigh the parallel bus's advantage of
      simplicity (no need for serializer and deserializer, or SerDes) and to
      outstrip its disadvantages (clock skew, interconnect density). The
      migration from PCI to PCI Express is an example. 
  ◦	Protocol Examples: 
    ▪	CAN Control Area Network Vehicle Bus 
    ▪	Ethernet 
    ▪	I²C multidrop serial bus 
    ▪	MIDI control of electronic musical instruments 
    ▪	Morse code telegraphy 
    ▪	RS-232 (low-speed, implemented by serial ports) 
    ▪	Tim note: See TTL Serial (RS-232 goes negative, TTL serial does not) 
    ▪	SPI 
    ▪	1-Wire multidrop serial bus 
    ▪	USB (moderate-speed, for connecting peripherals to computers) 
    ▪	LIN 
`
        },
        {
          image_src: "https://cdn.sparkfun.com/assets/f/9/c/0/2/50d2066fce395fc43b000000.png",
          name: "Asynchronous Serial",
          data:
`Source: https://learn.sparkfun.com/tutorials/serial-communication

Async Serial
▪	A synchronous serial interface always pairs its data line(s) with a clock
  signal, so all devices on a synchronous serial bus share a common clock. This
  makes for a more straightforward, often faster serial transfer, but it also
  requires at least one extra wire between communicating devices. Examples of
  synchronous interfaces include SPI, and I2C. 
▪	Asynchronous means that data is transferred without support from an external
  clock signal. This transmission method is perfect for minimizing the required
  wires and I/O pins, but it does mean we need to put some extra effort into
  reliably transferring and receiving data. 
  ▪	mechanisms that help ensure robust and error-free data transfers. Both
    devices on a serial bus are configured to use the exact same protocols. 
￼* See diagram *
    ▪	Frame: Each block (usually a byte) of data transmitted is actually sent in
      a packet or frame of bits. Frames are created by appending synchronization
      and parity bits to our data. 
      ▪	There’s always only one start bit, but the number of stop bits is
        configurable to either one or two (though it’s commonly left at one). 
      ▪	The start bit is always indicated by an idle data line going from 1 to
        0, while the stop bit(s) will transition back to the idle state by
        holding the line at 1. 
      ▪	Parity is a form of very simple, low-level error checking. It comes in
        two flavors: odd or even. 
      ▪	Parity is optional, and not very widely used. It can be helpful for
        transmitting across noisy mediums, but it’ll also slow down your data
        transfer a bit and requires both sender and receiver to implement
        error-handling (usually, received data that fails must be re-sent). 
    ▪	Baud rate: how fast data is sent over a serial line 
  ▪	9600 8N1: 9600 8N1 - 9600 baud, 8 data bits, no parity, and 1 stop bit - is
    one of the more commonly used serial protocols. 

◦	Tim note: Is all wireless communication asynchronous serial? 
  ▪	Asynchronous because you don’t have a clock wire 
  ▪	Serial because you only have one carrier wave 

`
        },
        {
          image_src: "https://cdn.sparkfun.com/assets/c/a/c/3/a/50e1cca6ce395fbc27000000.png",
          name: "Parallel Communication",
          data:
`Source: https://en.wikipedia.org/wiki/Parallel_communication

Parallel Communication: 
  ◦	parallel communication is a method of conveying multiple binary digits
    (bits) simultaneously. 
  ◦	Parallel communication is and always has been widely used within integrated
    circuits, in peripheral buses, and in memory devices such as RAM. Computer
    system buses, on the other hand, have evolved over time: parallel
    communication was commonly used in earlier system buses, whereas serial
    communications are prevalent in modern computers. 
  ◦	Examples 
    ▪	Computer peripheral buses: ISA, ATA, SCSI, PCI and Front side bus, and the
      once-ubiquitous IEEE-1284 / Centronics "printer port" 
    ▪	Laboratory Instrumentation bus IEEE-488 
    ▪	(see more examples at computer bus) 
`
        },
        {
          name: "Trade-offs",
          data:
`Source: https://en.wikipedia.org/wiki/Parallel_communication

Trade offs 
  ◦	Speed: Superficially, the speed of a parallel data link is equal to the
    number of bits sent at one time times the bit rate of each individual path;
    doubling the number of bits sent at once doubles the data rate. In practice,
    clock skew reduces the speed of every link to the slowest of all of the
    links. 
  ◦	Cable length: Crosstalk creates interference between the parallel lines, and
    the effect worsens with the length of the communication link. This places an
    upper limit on the length of a parallel data connection that is usually
    shorter than a serial connection. 
  ◦	Complexity: Parallel data links are easily implemented in hardware, making
    them a logical choice. Creating a parallel port in a computer system is
    relatively simple, requiring only a latch to copy data onto a data bus. In
    contrast, most serial communication must first be converted back into
    parallel form by a universal asynchronous receiver/transmitter (UART) before
    they may be directly connected to a data bus. 
  ◦	Physical Size: One huge advantage of having fewer wires/pins in a serial
    cable is the significant reduction in the size, the complexity of the
    connectors, and the associated costs. Designers of devices such as
    smartphones benefit from the development of connectors/ports that are small,
    durable, and still provide adequate performance. 
`
        }
      ]
    },
    {
      id: 33,
      name: "UART",
      language: "js",
      tabs: [
        {
          image_src: "https://cdn.sparkfun.com/assets/d/1/f/5/b/50e1cf30ce395fb227000000.png",
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter 
•	UART:
  ◦	A universal asynchronous receiver-transmitter (UART) is a computer hardware
    device for asynchronous serial communication in which the data format and
    transmission speeds are configurable. The electric signaling levels and
    methods are handled by a driver circuit external to the UART. A UART is
    usually an individual (or part of an) integrated circuit (IC) used for
    serial communications over a computer or peripheral device serial port.
    One or more UART peripherals are commonly integrated in microcontroller
    chips. 

Source: https://learn.sparkfun.com/tutorials/serial-communication 
￼* See Diagram *
Super-simplified UART interface. Parallel on one end, serial on the other.
  ▪	A universal asynchronous receiver/transmitter (UART) is a block of circuitry
    responsible for implementing serial communication. Essentially, the UART
    acts as an intermediary between parallel and serial interfaces. On one end
    of the UART is a bus of eight-or-so data lines (plus some control pins), on
    the other is the two serial wires - RX and TX. 
  ▪	As the R and T in the acronym dictate, UARTs are responsible for both
    sending and receiving serial data. On the transmit side, a UART must create
    the data packet - appending sync and parity bits - and send that packet out
    the TX line with precise timing (according to the set baud rate). On the
    receive end, the UART has to sample the RX line at rates according to the
    expected baud rate, pick out the sync bits, and spit out the data. 
  ▪	Software UARTs: If a microcontroller doesn’t have a UART (or doesn’t have
    enough), the serial interface can be bit-banged - directly controlled by the
    processor. This is the approach Arduino libraries like SoftwareSerial take.
    Bit-banging is processor-intensive, and not usually as precise as a UART,
    but it works in a pinch! 
`
        }
      ]
    }
  ]
};
