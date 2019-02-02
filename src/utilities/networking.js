export default {
  name: "Networking",
  data: [
    {
      id: 0,
      name: "OSI vs TCP/IP",
      language: "markdown",
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
      language: "markdown",
      tabs: [
        {
          image_src: "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2011/howtheintern.jpg",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

IP is the “thin waist” [only one protocol option for network layer]

The Internet Protocol (IP)
	•	IP is used every time we send and receive datagrams 
	•	How the data is transferred 
￼
IP Service Model
	•	Datagram: individually routed packets. Hop-by-hop routing. 
	•	Unreliable: packets might be dropped. 
	•	Best effort: packets are only dropped if necessary 
	•	Connectionless: no per-flow state. Packets might be mis-sequenced. 

Why is the IP service so simple?
	•	Simple, dump, minimal: Faster, more streamlined and lower cost to build and
    maintain 
	•	The end-to-end principle: where possible, implement features in the end
    hosts 
	  ◦	Allows a variety of reliable (or unreliable) services to be built on top 
	•	Works over any link layer: IP makes very few assumptions about the link
    layer below. 

The IP Service Model (Details)
	1. Tries to prevent packets looping forever (TTL) 
	2. Will fragment packets if they are too long 
	3. Uses a header checksum to reduce chances of delivering datagram to wrong
     destination 
	4. Allows for new versions of IP 
    	a. Currently: IPv4 with 32-bit addresses 
    	b. Also: IPv4 with 128-bit addresses 
`
        }
      ]
    },
    {
      id: 2,
      name: "TCP vs UDP",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.pluralsight.com/content/dam/pluralsight/blog/2007/10/networking-basics-tcp-udp-tcpip-osi-models/wp/img/TCP7.jpg",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

TCP:

TCP Service Model [in-order, reliable delivery of a stream of bytes between
applications processes]
Transmission Control Protocol (TCP)
	•	Transmission Control Protocol (TCP) is used by over 95% of Internet
    applications. 
	•	TCP is almost universally used because it provides the reliable, end-to-end,
    bidirectional byte-stream service that almost all applications want. 

•	Application: hands some bytes it wants to deliver to the other end to TCP
•	Transport: TCP places the bytes in a TCP Segment and hands it to the IP layer
•	Network: The IP layer encapsulates the TCP Segment in an IP datagram. The IP
           addresses are added. The IP datagram is handed to the Link Layer.
•	Link: The link layer builds the link frame, adds the Link address and then
        sends it onto the wire.
* See Diagram *

•	Transport layer: almost all web traffic is over TCP, the Transport Control
                   Protocol. 
  ◦	In its typical operation, there’s a client and a server. A server listens
    for connection requests. 

To open a connection it takes three messages (“three way handshake”) 
  1. Client sends a “synchronize” message to server (SYN) 
  2. Server responds with a “synchronize” message that also acknowledges the
     client’s “synchronize”, or a “synchronize and acknowledge message”
     (SYN-ACK) 
  3. Client responds by acknowledging the server’s synchronize (ACK) 

Connection Teardown: -> Fin, <- (Data +) Ack, <- Fin, -> Ack

•	From the perspective of the network layer, packets sent to different
  applications on the same computer look the same. This means that to open a TCP
  stream to another program, we need two addresses. 
  ◦	Internet Protocol address, is the address the network layer uses to deliver
    packets to the computer. 
  ◦	TCP port, tells the computer’s software which application to deliver data
    to. 
    ▪	Web servers usually run on TCP port 80. 
    ▪	Note: IP packets contain TCP segments that have the destination port 

The TCP Service Model:
Stream of bytes: Reliable byte delivery service
Reliable delivery:
1. acknowledgements indicate correct delivery
2. Checksums detect corrupted data
3. Sequence numbers detect missing data
4. Flow-control prevents overruning reciever
In-Sequence: Data delivered to application in sequence transmitted
Congestion Control: controls network congestion

UDP Service Model
UDP provides a simpler, datagram delivery service between application processes.

User Datagram Protocol (UDP): used by applications that don’t need the
guaranteed delivery service of TCP, either because the application handles
retransmissions in its own private way, or because the application just doesn’t
need reliable delivery.

User Datagram Protocol (UDP)
Connectionless Datagram Service: No connection established. Packets may show up
                                 in any order.
Self-contained datagrams:
Unreliable delivery:
1. No acknowledgements
2. No mechanism to detect missing or mis-sequenced datagrams
3. No flow control

So why do we have UDP?
•	It is used by applications that don’t need reliable delivery, such as simple
  request-response applications. 
•	DNS – the domain name system used by the Internet to turn a hostname into an
  IP address uses UDP because the request is fully contained in one UDP
  datagram. 
  ◦	If we send a DNS request containing a hostname, the DNS server will respond
    with an IP address we can use to send IP datagrams to the host. 
    ▪	If the request is successful, then using UDP is lightweight and fast –
      there is no need to setup a connection before making the query. If the
      request is unsuccessful, it simply times out and is resent. 
      ▪	This makes DNS simple and fast most of the time. 
•	The DHCP or Dynamic Host Configuration Protocol also uses UDP. 
  ◦	DHCP is also a request-response application making a single, self-contained
    request in one UDP datagram. 
  ◦	DHCP helps a new host find out its IP address when it joins a network. 
  ◦	Your laptop probably uses DHCP when it connects to WiFi. 
•	The Network Time Protocol or NTP also uses UDP for the same reason. 
•	Some applications use UDP because they have their own special needs for
  retransmission, congestion control, in-sequence delivery. 
  ◦	 A few real-time streaming audio and video services use UDP. 
    ▪	This is much less common that it used to be, because most video and audio
      streams of http today, which uses TCP instead of UDP. 
`
        }
      ]
    },
    {
      id: 3,
      name: "IPv4/IPv6 Address Assignment",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Names and Addresses: IPv4
Original Goal of Internet Protocol Address
	•	Stitch many different networks together 
	•	Need network-independent, unique address 
Internet Protocol, Version 4
	•	An IPv4 address identifies a device on the Internet 
	  ◦	Layer 3 (network) address 
	•	32 bits long (4 octets): a.b.c.d 
  	◦	Example: 171.64.64.64 
  	◦	Example: 128.30.76.82 
  	◦	Example: 12.22.58.30 
	•	Every device connected through IPv4 has an IP address 
	  ◦	The IP layer delivers packets whose destination is this address, to that
      device 
	•	A device typically also has a Netmask. A netmask tells the device which IP
    addresses are local (on the same link or network), and which require going
    through an IP router. 
	•	Netmask: apply this mask, if it matches, in the same network (bitwise AND) 
  	◦	Netmask of 255.255.255.0 means if the first 24 bits must match 
  	◦	Netmask of 255.255.252.0 means if the first 22 bits must match 
  	◦	Netmask of 255.128.0.0 means if the first 9 bits must match 
  	◦	Smaller netmask (fewer 1s) means larger network 

Address Structure Today
•	Classless Inter-Domain Routing (CIDR) 
  ◦	Allows allows prefixes to be any number of bits 
    ▪	All CIDR prefixes define a block of addresses that is a power of 2 in size 
    ▪	When we talk about CIDR addresses, we refer to its netmask length 
  ◦	Address block is a pair: address, count. Counts are powers of 2, specify
    netmask length (from left to right in bits 0-32) 
    ▪	171.64.0.0/16 means (“slash 16) 
      ▪	any address in the range 171.64.0.0 to 171.64.255.255 
    ▪	A /24 describes 256 addresses, a /20 describes 4,096 addresses 
•	Stanford today has 5 /16 blocks -- 325,000 addresses 

IPv4 Address Assignment
•	Internet Corporation for Assignment of Names and Numbers (ICANN) 
  ◦	Delegates the work to IANA 
•	IANA: Internet Assigned Numbers Authority 
•	IANA gives out /8s (16 million addresses) to Regional Internet Registries
  (RIRs) 
  ◦	Ran out in February 2011, in special end case of giving 1 to each RIR 
•	RIRs responsible for geographic regions, each has own policy 
  ◦	AfriNIC: Africa 
  ◦	ARIN: U.S.A., Canada, Caribbean, Antarctica 
  ◦	APNIC: Asia, Australia, New Zealand 
  ◦	LACNIC: Latin America, Caribbean 
  ◦	RIPE NCC: Europe, Russia, Middle East, Central Asia 



Names and Addresses: IPv6
Goal of Internet Protocol Addresses
•	Stitch many different networks together 
•	Need network-independent, unique address 
  ◦	Well, these days it can be only mostly unique -- see NATs, anycast, etc. 
•	But there are only 2^32 IPv4 addresses (approximately 4 billion) 
  ◦	Generally, utilization is ~35% 
    ▪	Generally, for a variety of reasons, on any kind of numbering scheme like
      this (like telephone numbers, etc…), utilization is never going to be
      100%. 
    ▪	In the case of IPv4, only about 35% of the IPv4 addresses are active at
      any time. 
  ◦	Challenge: If you’re using IPv4, you need an address to communicate… 


Internet Protocol, Version 6
•	Work started in 1994 
•	Basic protocol published in 1998 (published in RFC 2460) 
  ◦	Just before the dot com boom and bubble 
•	Lull, then increased interest in 2003-2006 
•	Today: hard push within the IETF as well as several governments for adoption 

Address Structure
•	IPv6 has 128 bits of address 
  ◦	2^128 (≈3.4x10^38) addresses: 
  ◦	You could have 4.3x10^20 addresses per square inch of the world’s surface! 
•	In General, address are separated into subnet and interface portions (RFC
  4291) 
  ◦	Similar to a CIDR class, where you have the net mask describing the network
    identifier, and then the set of nodes within that 
  ◦	Note: n below is number of bits 
￼* See Diagram *
•	Write address in hexadecimal as 8 blocks of 16 bits, separated by “:” 
  ◦	market.scs.stanford.edu: 2001:470:806d:1::9 prefixlen 64 
    ▪	Prefix length 64 indicates that the subnet is 64. The last 64 bits denote
      the actual address of the node (0:0:0:9 in this case). 
  ◦	Can omit a single run of zeros with :: 
    ▪	In the example above, the 5th, 6th and 7th blocks are all zero 
    ▪	So, the full address would be 2001:470:806d:1:0:0:0:9 
  ◦	Use brackets in URLs: http://[2001:470:806d:1::9]:80 
  ◦	Can write low 32 bits like IPv4: 64:ff9b::171.66.3.9 
    ▪	This is one way to make IPv4 addresses addressable from IPv6 

IPv6 Address Assignment
•	Gone through several iterations, improved with experience 
•	RFC 3177: give out: /48 in general case, /64 sometimes, /128 very rarely 
•	RFIC 6177: give out: at least /64, don’t use /128, Up to RIRs to decide on
  allocation size (kind of like IPv4 today) 
  ◦	The observation is that 48 is much more than almost anyone needs 

Example Approach to get an IPv6 Address (RFC 4291)
•	You can auto-generate IPv6 address from subnet /64 and Ethernet address 
  ◦	If your organization has a 64-bit subnet identifier, you can automatically
    generate your own IPv6 address. You don’t have to ask for an address like
    you do when using IPv4 with DHCP 
•	Ethernet devices have a 48-bit unique identifier (layer 2 address) 
  ◦	Specified at manufacturing, today you can typically change it if you want 
    ▪	Baked in the card, but often you can reprogram it if you want 
•	Ethernet Address Structure: 
  ◦	Manufacturer code (c) and assigned value (m), g is 0 for unicast MAC address 
    ▪	The lower 24 bits are used to produce 16 million devices 
    |cccccc0g|cccccccc|cccccccc|mmmmmmmm|mmmmmmmm|mmmmmmmm|
•	Convert 48-bit Ethernet address to 64-bit interface ID by flipping 0, sticking
  0xfffe in middle: 

|cccccc1g|cccccccc|cccccccc|11111111|11111110|mmmmmmmm|mmmmmmmm|mmmmmmmm|

Bottom line: The size of the address space being 128 bits actually gives you a
great deal of flexibility in terms of assigning addresses. Furthermore, it can
simplify management and configuration.

His example: Every Ethernet device has the same two bytes in it (0xfffe), this
provides flexibility because, if we want to do something besides Ethernet, as
long as we don’t match those two bytes, we can generate an IPv6 address that
will not collide.

`
        }
      ]
    },
    {
      id: 4,
      name: "ARP",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Address Resolution Protocol (ARP) [Get the link address from the IP address]
ARP: the mechanism by which the network layer can discover the link address
associated with a network address it’s directly connected to.
•	ARP is needed because each protocol layer has its own names and addresses 
•	Network-level address: IP address 
  ◦	It describes the host, a unique destination at the network layer 
•	Link-level address: link address 
  ◦	It describes a particular network card, a unique device that sends and
    receives link layer frames 
  ◦	Example: Ethernet has 48 bit addresses 
    ▪	Whenever you buy an Ethernet card, it is preconfigured with a unique
      Ethernet address 
    ▪	Usually written as a colon delimited set of 6 octets written in hex, such
      as: 
      ▪	0:13:72:4c:d9:6a 
•	Note: while link layer and network layer addresses are completely decoupled
  with respect to the protocol layers, in terms of assignment and management
  they might not be. 
  ◦	For example: it is very common for a single host to have multiple IP
    addresses (one for each of its interfaces). It needs to because of the
    netmask 
    ▪	Netmask doesn’t work well with if IP addresses are too different (the
      addresses belong in different networks) 
  ◦	The fact that link layer and network layer addresses are decoupled logically
    but coupled in practice is in some ways a historical artifact. 
    ▪	When the internet started there were already many link layers with there
      own (no IP) addressing schemes, and it wanted to be able to run on top of
      all of them. 


Address Resolution Protocol
•	ARP is a simple request-reply protocol that Generates mappings between layer 2
  and layer 3 addresses 
  ◦	Every node keeps a cache of mappings from IP addresses on its network to
    link layer addresses 
    ▪	If a node needs to send a packet to an IP address it doesn’t have a
      mapping for, it sends a request: “Who has network address X?”. 
      ▪	The node that has that network address sends a response that includes
        the link layer address. 
      ▪	On receiving the response, the requester can generate the mapping and
        send the packet. 
  ◦	Cache entries expire 
•	So that every node hears the request, a node sends requests to a link layer
  broadcast address. Every node in the network will hear the packet. 
•	Reply sent to requesting address (not broadcast) 
•	Furthermore, ARP is structured so that it contains redundant data. 
  ◦	The request contains the network and link layer address of the requestor 
  ◦	Request has sufficient information to generate a mapping 
    ▪	That way, when nodes hear a request (since it’s broadcast), they can
      insert or refresh a mapping in their cache. 
  ◦	Makes debugging much simpler 
•	Nodes only respond to requests for themselves. No “sharing” of state means
  that bad state will die eventually. 
  ◦	This means, assuming nobody is generating packets incorrectly, the only way
    you can generate a mapping for another node is in response to a packet that
    node sends. 
  ◦	So if that node crashes or disconnects, its state will inevitably leave the
    network when all of the cached mappings expire. This makes debugging and
    troubleshooting ARP much easier. 
•	How long do these dynamically discovered mappings last? 
  ◦	It depends on the device: some versions of Mac OSX, for example, keep them
    around for 20 minutes, while some Cisco devices use timeouts of 4 hours. 
  ◦	The assumption is that these mappings do not change very frequently 
`
        }
      ]
    },
    {
      id: 5,
      name: "ICMP",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

ICMP service model

Internet Control Message Protocol (ICMP): typically used to report errors and
diagnose problems with the network layer.
•	It provides information about the network layer to end hosts and routers. 
•	It sits above the IP layer and, therefore, strictly speaking, it's a transport
  layer mechanism. 
  ◦	Although it's really there to serve the network layer. 
•	The commonly used tools ping and traceroute both rely on ICMP 


Making The Network Layer Work (three mechanisms needed)
1.	The Internet Protocol (IP) 
    1.	The creation of IP datagrams 
    2.	Hop-by-hop delivery of datagrams from end to end 
2.	Routing Tables 
    1.	Algorithms are run to populate router forwarding tables 
3.	Internet Control Message Protocol 
    1.	Communicates network layer information between end hosts and routers 
    2.	Reports error conditions 
    3.	Helps us diagnose problems 
    4.	Helps us figure out the path taken by packets 
    5.	etc. 

ICMP Runs Above the Network Layer
•	Strictly speaking ICMP is a transport layer protocol. 
•	When an end host or router want to report an error using ICMP, it puts the
  information that it wants to send back to the source into an ICMP payload. And
  hands it to IP, to be sent as a datagram. 

An Example (* See Diagram *)
￼
An HTTP or web client is going to be accessing an HTTPserver at B.
•	So as we've seen before, the application bytes that for, for HTTP get put into
  the transport layer as usual and to TCP, comes down to the network, goes out
  along the link, comes up to the router. 
•	Imagine that the address is actually to a network that this router has no
  information about in its forwarding table. 
•	Now this will be a pretty bad situation, because that router doesn't know how
  to forward the packet to B. 
•	But, if that happens, then the router will send back a message to A that says
  “destination network unreachable.” 
  ◦	And that's simply saying that it has no means to deliver that packet to B,
    so it's alerting A by sending that back. 

The ICMP Service Model
Reporting Message: Self-contained message reporting error.
Unreliable: Simple datagram service - no retries.

`
        }
      ]
    },
    {
      id: 6,
      name: "End-to-end Principle",
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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


What is Packet Switching?
Packet switching was first described by Paul Barren in the early 1960s.
	•	It describes the way in which packets of information are routed one-by-one
    across the internet to their destination, just like letters are delivered by
    the post office. 


Packet Switching
•	So again, we're gonna look at two end systems communicating and this in this
  case we're gonna look at this laptop on the left, A, and it's going to be
  talking to the server on the right, B. 
￼* See Diagram *
•	In packet switching there's no dedicated circuit to carry our data. Instead we
  just send when we are ready at any time we want we send a block of data by
  adding a header to it . That's what we call a packet. 
•	A header contains the address of where the packet is going just like an
  envelope tells the post office where to send the letter. 
•	Packet switched network consists of end host, the links, and packet switches.
  When we send the packet, it's routed one hop at a time from the source, in
  this case that laptop, A, all the way through to the destination B. 
•	If you look at the packet it has the data in it, and it also has the address,
  B of where it's going to. [in reality, packets are more complicated than this] 
•	So when we send the packet it's gonna be routed hop-by-hop from the source to
  the destination. 
•	Each packet switch has a local forwarding table to tell it where the packet
  goes next, based on the packet’s destination address. 
•	So in the internet, there's lots of different types of packet switch. Some of
  them are called routers because they deal with addresses that are internet
  addresses and they may include little routers that we have on our desks at
  home or huge routers that are in big wiring closets in big switching centers.
  But we call those routers. 
•	There are also things called ethernet switches. 
•	Of course at any instance there's gonna be many packets flowing across the
  Internet. Millions and millions of packets flowing in all sorts of different
  directions. And they're all being routed hop-by-hop, one at a time by the, by
  the packet switches along the path. 

Packet switches have buffers
•	In addition to a forwarding table, packet switches also have to have buffers. 
•	If two packets arrive at the same time (let’s say they are arriving at the
  full line rate of the outgoing link). 
•	Then the packet switch has to hold one of them while it sends the other, it
  can't send them both at the same time. 
•	Because it might have many incoming links, the packet switch has to have a
  buffer to hold perhaps, many, many packets. These buffers can be quite large
  in a practice. 
•	So the buffers hold packets: 
  ◦	When two or more packets arrive at the same time. 
  ◦	And particularly during periods of congestion, when there are lots and lots
    of packets coming in at all of these input links, all trying to get to the
    same output, it may actually have quite big buffers to hold packets during
    those times of congestion. 

Packet Switching Summary
￼
•	Packets are routed individually by looking up the address in the router's
  local forwarding table. 
•	All packets share the full capacity of a link. 
•	The routers maintain no per-communication state. 
  ◦	Now this is really quite key. In a circuit switch, remember, we need to
    maintain state associated with every circuit we're maintaining. 
  ◦	Here we maintain no state, we just maintain the forwarding table. 
    ▪	There's is no per communication, no per packet, or no per flow state
      associated with that communication. 

Why does the Internet use Packet Switching? [The three original reasons]
1.	Efficient use of expensive links 
    1.	Links were assumed to be expensive and scarce 
    2.	Packet switching allows many, bursty flows to share same link
        efficiently 
        1.	Because at any one instant, the packet can use the entire link. But
            it can be immediately followed by another packet using the entire
            link belonging to a different communication. 
    3.	“Circuit switching is rarely used for data networks, … because of very
        inefficient use of the links”  - Bertsekas/Gallager 
2.	Resilience to failure of links & routers 
    1.	Because each packet is individually routed along the path, if something
        breaks, a link breaks or a router breaks, then we can, because we have
        no state in all of the switches for this particular flow, simply send
        the packet on a different path. We can send it over a different link, to
        a different router, and it will find its way eventually. 
    2.	“For high reliability, … [the Internet] was to be a datagram subnet, so
        if some lines and [routers] were destroyed, messages could be rerouted”
        - Tanenbaum 
3.	The internet was originally designed as an interconnection of the existing
    networks. 
    1.	At that time, pretty much all widely used communication networks. All
        computer networks were packet switched. So, if the internet was to
        interconnect all of those existing networks, then it too needed to be
        packet switched as well. 

`
        }
      ]
    },
    {
      id: 10,
      name: "Forwarding Table",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

•	The router uses a forwarding table to decide where to send a packet 
  ◦	A forwarding table consists of a set of IP address patterns and the link to
    send across for each pattern. 
  ◦	When a packet arrives, the router checks which forwarding table entry’s
    pattern best matches the packet. It forwards the packet along that entry’s
    link. Generally, “best” means the most specific match. 
  ◦	The default route matches every IP address. 


Longest Prefix Match
•	IP routers use the longest prefix match algorithm to choose matching entry
  from forwarding table (where to forward a packet) 
•	Forwarding table has two parts 
  1. a set of CIDR entries describing a block of addresses 
  2. A next hop for packets that match that CIDR entry 
•	Algorithm: use forwarding entry with the longest matching prefix 
•	An address might match multiple entries. 
`
        }
      ]
    },
    {
      id: 11,
      name: "Ethernet Switch vs. Internet Router",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

•	Routers: IP packets between the client and server take many “hops,” where a
           hop is a link connecting two routers. 
  ◦	A router can have many links connecting it. As each packet arrives, a router
    decides which of its links to send it out on. 
  ◦	Routers have IP addresses, so it’s also the case that it might not forward a
    packet but rather deliver it to its own software. 
    ▪	For example, when you log into a router using TCP, the IP packets are
      destined to the router’s own IP address. 


Generic packet switch
￼
The three main stages of a packet switch are that when a packet arrives:
1.	Look up the destination address in the forwarding table 
    1.	We send the destination address down to the forwarding table which will
        tell us the egress link or the port that it's going to and that helps us
        decide where to send it next. 
2.	Update the header (if necessary) 
    1.	For example, if it's an Internet router we have to decrement the TTL and
        update the checksum. 
3.	Queue the packet (if necessary) 
    1.	There may be many packets trying to get to the same outgoing link at the
        same time. So we use a buffer memory to hold some packets that are
        waiting their turn to depart on the egress line. 


Ethernet switch [specific type of packet switch that deals with Ethernet frames]
These are the four basic operations that an Ethernet switch must perform
1.	Examine the header of each arriving frame 
2.	If the Ethernet destination address (DA) is in the forwarding table, forward
    the frame to the correct output port(s) 
    1.	These are 48 bit addresses with the Ethernet. 
    2.	If it finds that address in the forwarding table, it's gonna forward the
        frame to the correct outgoing port, or maybe a selection of ports if
        it's a multicast packet. 
3.	If the Ethernet DA is not in the table, broadcast the frame to all ports
    (except the one through which the frame arrived) 
    1.	In other words, it doesn't know where to send it, so it's going to flood
        it to everybody, in the hope it'll reach its destination. 
4.	Entries in the table are learned by examining the Ethernet source address of
    arriving packets 
    1.	So when packets first come through, the destination address is not in
        the table. 
    2.	It's broadcast to everybody. 
    3.	Hopefully the other end will respond, send a packet back, we'll see it's
        source address and therefore learn which port to use to reach that
        particular address 

Internet Router [a type of packet switch that processes the IP destination
address]
1.	If the Ethernet DA of the arriving frame belongs to the router, accept the
    frame. Else drop it. 
    1.	Because IP datagrams are encapsulated in Ethernet packets, it's going to
        check to see whether the Ethernet destination address of the arriving
        frame belongs to the router. 
    2.	In other words, is it specifically addressed to this router? If not, it
        drops it. 
2.	Examine the IP version number and length of the datagram 
    1.	e.g., the IP version number is 4 if it’s an IPV4 router 
3.	Decrement the TTL, update the IP header checksum [because it includes the
    TTL] 
4.	Check if TTL == 0 
    1.	If TTL == 0, drop packet 
    2.	If TTL != 0, continue 
5.	If the IP DA is in the forwarding table, forward to the correct egress
    port(s) for the next hop 
    1.	ports if it's multicast. 
6.	Turn the IP DA into the equivalent Ethernet DA for the next hop router [ARP] 
7.	Create a new Ethernet frame and send it 
    1.	Encapsulate the IP datagram into a new ethernet frame and send it to the
        wire 

Basic Operations of a Packet Switch
1.	Lookup Address: How is the address looked up in the forwarding table? 
2.	Switching: How is the packet sent to the correct output port? 

Address Lookup: Ethernet Switch [exact match]
Address Lookup: Internet Router (IP router) [longest prefix match]


`
        }
      ]
    },
    {
      id: 12,
      name: "NATs and the New Hourglass",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Network Address Translator (NAT) first specified in RFC 1631
NATs are an example of the tradeoffs that result from putting some smarts into
the network:
	•	They have some really nice benefits, but they introduce complexity that can
    cause a lot of headaches. 

Example: What they do
•	It’s a box that sits between you and the Internet 
•	In this example, your device is on the left 
•	The NAT has its own IP address, for the public Internet, we’ll call it IP
  address X 
•	The NAT also has an internal interface, we’ll call it IP address I. 
  ◦	Nick note: the NAT device manages a subnet or set or private internal
    addresses (for example, all the IP addresses starting with 10, or all the IP
    addresses starting with 192.168). It assigns one of the private addresses to
    itself (example: 192.168.0.1), and then assigns the remaining addresses to
    devices in the internal network 
•	When a packet comes from your computer, to the NAT’s internal interface, the
  NAT will rewrite your packet so it appears to be coming from the NAT’s
  external interface, IP address X. 
•	The destination host sees a packet from X 
•	When the destination sends a packet back to X, the NAT will re-write the
  packet destination to your destination IP address and forward it appropriately
  to its internal interface 

Examples of How NATs help you
•	Almost all wireless home routers today are NATs 
  ◦	You connect your wireless router to your Internet connection and the ISP
    gives you a single IP address 
  ◦	Internally, the NAT can give many machines behind it different private IP
    addresses (local IP addresses) 
  ◦	It can then translate all of the private IP addresses into a single public
    IP address 
  ◦	So, this is a way for many nodes to share an IP address. It allows you to
    have, for example, machines in your house with a single IP address 
  ◦	The single public routable IP address is the NAT’s IP address 
•	Having a NAT wireless home router provides some security 
  ◦	Because your IP addresses are hidden behind this NAT, it’s actually very
    hard for adversaries or attackers to start opening connections to your
    machines. 
  ◦	So, it’s a limited kind of firewall security protection 

So, this is what’s happening when you connect over wireless to your wireless
router at home. When you look up your IP address on your network control panel,
it will almost certainly be a local private address, either something in the 10
range or 192.168. When you are sending packets out to servers on the Internet,
your router is translating them to it’s own public IP address and port.
•	Example: in terminal: $ ifconfig 
  ◦	His wireless interface is en1, and he has a private IP address: 10.33.6.35,
    because he is sitting behind a NAT 
  ◦	When he googles his “what’s my ip”, he gets 171.66.168.122, his public IP
    address. 
  ◦	Bottom line: 
    ▪	He has a private IP address of 10.33.6.35 on the internal interface of the
      NAT 
    ▪	The external interface of the NAT is 171.66.168.122 

Transport: No New Transport! Perhaps an even deeper implication of NATs
•	For a NAT to set up a mapping, it needs to know what the transport protocol
  is, and how it works. 
•	If you deploy a new transport protocol, use the transport protocol identifier
  in an IP packet, and try to get it to traverse a NAT, the NAT will discard it
  because it isn’t familiar with the packet format. 
•	The problem: 
  ◦	You can’t deploy a new transport protocol on the Internet because of NATs 
  ◦	The people that are developing and maintaining NAT software will not add
    support for a new protocol until it’s very, very popular, but it won’t
    become very popular until it works across NATs. 
•	Result: we are basically stuck with TCP, UDP, ICMP 
  ◦	To have an application really work on the Internet at large, it has to use
    one of those three protocols 

NAT Debate
•	Tremendously useful 
  ◦	Reuse addresses 
  ◦	Simple Security (not opening connections can be good!) 
    ▪	Example: you have vulnerable open ports on your Linux or Windows machine.
      Because there’s no mapping, attackers from from outside on the broad
      Internet can’t compromise me. 
•	Tremendously painful 
  ◦	Large complication to application development (especially before standard
    behavior) 
    ▪	Example: switching servers, symmetric NATs, port realocation, connection
      breaks, hard to debug 
  ◦	Speak freely (pre-Skype VOIP!) 
    ▪	Developer quit because he couldn’t get it to work under NATs. Note: this
      was before the behavior was standard enough to figure out things like hole
      punching. 
•	Debate interesting but pointless: NATs are here to stay 
  ◦	They’re deployed and they will always be deployed 
  ◦	Their advantages, generally are considered to outweigh their disadvantages. 

The New Hourglass [how NATs caused an architectural shift in the Internet within
the past decade]
￼* See Diagram *
•	Really, in a practical sense, the new hourglass includes not only layer 3, but
  also layer 4. 
  ◦	Because for practical concerns, we’re not going to see new transport
    protocols deployed. 
•	You can build protocols on top of UDP, and that’s generally what’s done today.
  Since UDP just provides a nice datagram service, rather than using a transport
  identifier at layer 3, you use a port at layer 4. 
•	Nick note: In general, when people create new transport protocols, they either
  masquerade as TCP, or run on top of UDP 

`
        }
      ]
    },
    {
      id: 13,
      name: "HTTP",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

HTTP HyperText Transfer Protocol (an Application that uses TCP)

HTTP is a cornerstone of the modern Internet. Originally intended to transfer
documents, it’s now used for so much more.

Basic conceptual model behind HTTP: REST

HyperText
•	Definition: HyperText is a document format that lets you include formatting
  and content information in a document. 
  ◦	All of the formatting is inside angle brackets: <>. 
  ◦	At a basic level, a hypertext document is just a text document your browser
    displays based on these special formatting controls called tags. 
  ◦	A hypertext document is more than just formatting, you can embed documents
    or files inside other files. 
    ▪	For example: it can reference an image, style sheets, scripts, fonts,
      etc... 
•	Whenever you download a web page, you’re downloading a hypertext document. 
•	Unlike many other document formats like Microsoft Word or PDF, hypertext is
  all ASCII text. If you look a document, generally speaking, there aren’t any
  characters your regular text editor can’t display. 

World Wide Web (HTTP)
￼
In HTTP, a client opens a TCP connection to a server and sends commands to it.
•	The most common command is GET, which requests a page. 
•	HTTP was designed to be a document-centric way for programs to communicate 
•	For example: if I type http://www.stanford.edu/ in my browser 
  ◦	The browser opens a connection to the server www.stanford.edu and sends a
    GET request for the root page of the site. 
  ◦	The server receives the request, checks if it’s valid and the user can
    access that page, and sends a response. 
    ▪	The response has a numeric code associated with it. For example, if the
      server sends a 200 OK response to a GET, this means that the request was
      accepted and the rest of the response has the document data. So the rest
      of the response would include HyperText that describes the main Stanford
      page. 
•	There are other kinds of requests, such as PUT, DELETE, and INFO, as well as
  other responses such as 400 Bad Request. 
•	Like hypertext itself, HTTP is all in ASCII text: it’s human readable.
  Examples: 
  ▪	the beginning of a GET request for the New York Times looks like this:
    GET / HTTP/1.1. 
  ▪	The beginning of a response to a successful request looks like this:
    HTTP/1.1 200 OK. 

HTTP Request Format
￼* See Diagram *
Above is what an HTTP request looks like
•	The first line, ASCII text, says the method, such as GET, the URL for the
  method, and the version of HTTP being used. 
•	After this first line (the request itself) there’s zero or more headers. 
  ◦	There’s one header per line. 
  ◦	Each header line starts with the header field name, followed by the value. 
  ◦	Note: the “If-Modified-Since” header, is how the client tells the server to
    only give the document if it’s been modified since that timestamp. If it has
    been modified, the server responds with 200 OK, and a new copy of the
    document. Otherwise, the server responds with 304, Not Modified. This header
    is useful when your client caches pages, which most web browsers do. 
•	After the headers, there’s an empty line, followed by the body of the message. 
  ◦	In the case of the GET method, to request a page, the body is empty 
  ◦	HTTP supports other methods, such as POST, which sends data, for example
    when you fill out a form and submit it. POST requests often have a body. 
•	Notes: 
  ◦	The white boxes represent spaces. 
  ◦	The left arrow means carriage return -- a way to say to go to the beginning
    of the line, and the down arrow means newline, a way to say to go to a new
    line. 

HTTP Response
￼* See Diagram *
An HTTP response looks similar.
•	The first line has the HTTP version, the status code, and the phrase
  associated with that status code, such as 200 OK or 404 Not Found. 
•	There’re then zero or more headers, a blank line, and the body of the
  response. 


One nice thing about HTTP is that it’s human readable text 

`
        }
      ]
    },
    {
      id: 14,
      name: "DNS Architecture",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.computerhope.com/jargon/d/dns.gif",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Domain Name System (an Application that uses UDP)

Domain Name System
•	Map human readable names to addresses (more generally, values) 
  ◦	Originally, it was to map IP addresses. Nowadays, you can use it for much
    more. 
•	Must be able to handle huge number of records 
  ◦	In theory, there are 2^32 IP addresses 
•	Must have distributed control: people can control their own names 
  ◦	One of the problems with hosts.text was that there was a single centralized
    repository. 
•	Must be robust to individual node failures 

Domain Name System Design
•	Two properties make DNS design feasible 
  1.	Read-only or read-mostly database: hosts look up names much more often
      than update them 
  2.	Loose consistency: changes can take a little while to propagate 
      1.	We don’t need perfect consistency. It is okay if things are slightly
          out of date. 
•	Those two properties allow extensive caching 
  ◦	Look up a name, keep result for a long time 
  ◦	Once you have a result, you can hold onto it for a long time. Then, when it
    expires, maybe request a new result. But, rather than have one place that
    has to be asked for everything, you can ask some place once, and then cache
    that result and answer it for other people. So you can look up a name and
    keep the result for a long time and then use it to answer other queries. 

DNS Name Architecture
•	This is how DNS meets requirement of having a distributed administration of
  names 
•	The root: at the top is what’s called the “dot” or the called the root of the
  DNS namespace 
  ◦	It’s an empty name 
  ◦	So these are called the root servers 
•	TLDs: Next are the top level domains or TLDs (EDU, COM, ORG, US, FR, etc..) 
•	Domains: Next are the domain names (e.g., stanford.edu, cisco.com, baidu.cn) 
•	Subdomains: the domain owners can hand out additional domains 
  ◦	Examples: 
    ▪	cs.stanford.edu and www.stanford.edu are one level below stanford.edu 
    ▪	www.cs.berkeley.edu is one level below cs.berkeley.edu which is one level
      below berkeley.edu 
￼* See diagram *

DNS Servers
•	Hierarchical zones (“root” zone, edu, stanford, scs) 
•	Each zone can be separately administered 
  ◦	Example: EDU can grant Stanford the name “Stanford,” but it’s up to Stanford
    to manage all the names beneath Stanford. 
•	Each zone can be served from several replicated servers 
  ◦	The idea is that, if a server goes down, other servers can still answer
    questions about Stanford. 
•	Root zone: 13 servers, highly replicated (a, b, c, ... m) 
  ◦	Bootstrap: root server IPs are stored in a file on name server 
    ▪	There’s sort of a bootstrapping process when you computer asks about a
      name it knows nothing about. 
  ◦	Root servers are additionally replicated through IP Anycast (discussed
    later) 
    ▪	IP Anycast: there are many machines that have the same IP address, which
      basically causes you to contact the one that is closest to you. 
  ◦	DDOS: the root servers are highly robust. Large-scale DDoS attacks against
    the DNS root servers, where people are are trying to cause the DNS system to
    fail, have never succeeded. 
    ▪	There are so many of these servers (robust) and their job is so simple,
      that attackers have not been able to do it. 

DNS Root Server Map
￼* See Diagram *
http://en.wikipedia.org/wiki/File:Root-current.svg
Above is a map of the DNS root servers
•	They are spread all over the world 
•	So, if a DNS server in Saudi Arabia, for example, wanted to issue a DNS query,
  it doesn’t have to go very far. There are root servers that are very close by. 

A DNS Query
•	Two types of queries [specified by a bit in query] 
  ◦	Recursive: asks the server to resolve the entire query [client] 
  ◦	Non-recursive: the server resolves one step of the query [resolver] 
•	DNS usually uses UDP port 53 
  ◦	512 byte message limit 
•	You can use TCP port 53 
  ◦	Prefix messages with 16-bit length field 
  ◦	All the DNS messages have a 16-bit length field. You know how long they are
    since they are not datagrams, they’re a stream. 
•	Example: client asks for IP address associated with www.stanford.edu 
  ￼* See Diagram
  ◦	Using DHCP, the client has an address for a DNS server (resolver) 
  ◦	Client sends a DNS recursive query for IP address of www.stanford.edu to
    resolver 
  ◦	The resolver recursively resolves the entire query 
  ◦	Assume the resolver has nothing cached (it knows nothing about the world).
    It
    just has the IP address of some root servers 
    1.	Resolvers sends a non-recursive query to a root server for information
        about EDU (such as an EDU server’s IP address) 
        1.	Note: you can’t ask a root server to answer the whole query. Root
            servers just answer one step. 
    2.	The resolver caches the root server’s response. 
    3.	The resolver sends a non-recursive query to the EDU server for
        information about Stanford. 
    4.	The resolver caches the EDU server’s response. It now has information
        about the Stanford domain server. 
    5.	The resolver asks the Stanford domain server for the IP address of WWW 
    6.	The Stanford domain server responds with the IP address for
        www.stanford.edu 
    7.	The resolver caches the result 
  ◦	The resolver returns the IP address to the client 
  ◦	Note: if the resolver already had the desired information cached (from a
    previous query), it could have returned the cached result and avoided asking
    all the other servers. 
  ◦	DNS cache poisoning: a aspect of DNS attacks where a bad record is placed
    into the resolver’s cache. This could be used to direct a client to a
    hacker’s server instead of their intended destination 

•	Nick notes: 
◦	Each of the records can be cached for a long time to reduce load 
◦	To make caching work even better, often many clients share a resolver, a
  computer who queries the Domain Name service for you. 
  ▪	That way, it can cache all of those results and share them among clients. 
  ▪	All of stanford only needs to do a single lookup for Google, rather than
    having every laptop contact Google’s DNS servers. 


`
        }
      ]
    },
    {
      id: 15,
      name: "DHCP",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Dynamic Host Configuration Protocol (DHCP)

Communicating with IP
•	Need three things that a host needs (plus one) 
  1.	IP address 
  2.	Subnet mask 
    ▪	It needs to differentiate between its local subnet vs. nodes it must
      contact through a local gateway. 
  3.	Gateway router 
    ▪	It needs to know the gateway router, so that if a node is not on its local
      subnet, it has the IP address of the first hop towards destinations
      outside of the local subnet. 
  ◦	A DNS server IP address is also useful (but not necessary for IP) 
    ▪	This allows you to translate names like www.cnn.com into an IP address 
•	Problem: how do we get these values? 

DHCP
•	Dynamic Host Configuration Protocol (DHCP), RFC 2131 
•	A machine can request configuration from a DHCP server when connected to a
  network 
  ◦	Movement: just request configuration again 
    ▪	You’re in a different part of the network, so you need a different
      configuration 
  ◦	Configuration has a duration: a “lease,” which can be renewed 
    ▪	When the DHCP server gives you a configuration, it’s associated with a
      lease. 
    ▪	If you are nearing the end of that lease, you can re-request the same
      configuration, and usually the server will give it to you. 
  ◦	Garbage collection: when lease expires 
    ▪	Leases make garbage collection very easy, because if somebody doesn’t
      re-request it, you can reclaim say, that IP address. 
•	Packet exchange in DHCP: discover, offer, request, ack, release 
  ◦	Discover: when a client node first joins the network and knows nothing, it
    sends out a discover message to determine what DHCP servers are out there,
    and what configurations they might provide. 
  ◦	Offer: the DHCP server responds to the discover with a configuration offer.
    There might be offers from multiple servers 
  ◦	Request: the client sends a request for one of the configurations to the
    originating DHCP server 
  ◦	Ack: the server sends an ack, acknowledging that you can have that
    configuration. This configuration is now valid for the duration of the
    lease. 
  ◦	Release (optional): the client can release the configuration early. 
  ◦	Note: If the lease is nearing its end, the client uses the same request
    mechanism as before to do a re-request. 



`
        }
      ]
    },
    {
      id: 16,
      name: "Internet Routing Protocols",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Note:
	•	Today, all Ethernet switches and Internet Routers use forwarding tables. 
	•	The job of the routing algorithm is to populate the forwarding tables. 

Spanning Tree when populating the forwarding tables with entries, it’s often the
goal to create the spanning tree
•	Spanning: it reaches all leaves 
  ◦	Every source can reach every destination 
•	Tree: it has no loops 

Note: the network is not a spanning tree, the spanning tree is just used to
populate the forwarding tables


•	We need automated algorithms to calculate the route and put the necessary
  forwarding entries into the forwarding tables in the routers. 
•	To calculate the routes, the routers are going to exchange information with
  each other about the current topology as they know it. This is the job of the
  routing algorithm (aka the routing protocol). 


Bellman Ford (a Distance Vector Protocol)
Distance vector protocols:
  •	Each router maintains a distance vector that keeps track of the distances
    between that router and every other router. 
  •	Iteratively, through a distributed algorithm, they converge on finding the
    shortest path or the lowest spanning tree from them to every other router 

Problem: how can routers work together to find minimum cost spanning tree?
•	Equivalent to finding minimum cost spanning tree among routers only. The end
  hosts don’t need to be included. 
￼* See diagram *
The Distributed Bellman-Ford Algorithm
•	Example: Find min-cost spanning tree to R8 
  ◦	Assume routers know cost of link to each neighbor. 
  ◦	Router Ri maintains value cost Ci to reach R8. 
  ◦	Vector C = (C1, C2,…C7) is the distance vector to R8. 
  ◦	Initially, set C = (∞, ∞, … ∞). 
    1.	After T seconds, Ri sends Ci to its neighbors 
    2.	If Ri learns lower cost path, update Ci 
    3.	Repeat 

  ◦	Calculating a tree for R1 – R7 is a natural extension. Just exchange all of
    the values. 

Distributed Bellman-Ford Algorithm
Questions:
1.	What is the maximum run time of the algorithm? 
  1.	The algorithm will stop after it completes as many iterations as hops in
      the longest loop-free path 
      1.	A path with a loop in it will have a higher cost 
2.	Will the algorithm always converge (on correct answer)? 
    1.	Yes, because we only replace a value with a lower cost value, and
        eventually all of our neighbors will send us their lowest cost path. 
3.	What happens when link costs change, or when routers/links fail? 
    1.	In general, it will continue to converge (if the graph is still a
        spanning tree) 

A Problem with Bellman-Ford “Bad news travels slowly” [counting to infinity
problem]
•	The problem arises, because R3 is relying on old information 
* See diagram *

Counting to Infinity Problem Solutions
1.	Set infinity = “some small integer” (e.g. 16). Stop when count = 16. 
2.	Split Horizon: Because R2 received lowest cost path from R3, it does not
    advertise cost to R3. 
3.	Split-horizon with poison reverse: R2 advertises infinity to R3. 
4.	There are many problems with (and fixes for) the Bellman-Ford algorithm. 

Bellman Ford in practice
•	Bellman-Ford algorithm is an example of a Distance Vector algorithm. 
•	It was used in the first Internet routing protocol, called Routing Information
  Protocol (RIP) 
  ◦	Phil: The good thing about RIP is that its algorithm is distributed: the
    routers work together to build a complete set of forwarding tables. This was
    important in the early days of the Internet when the routers were assumed to
    have very little computing power. 
•	It requires very little computation on the routers, is distributed, and will
  eventually converge 
•	Over time it was replaced by algorithms that independently calculate the
  entire minimum cost spanning tree at each router. 


Dijkstra (a Link State Algorithm)
Link state algorithm:
•	Link state is known by every router (through flooding) 
  ◦	routers flood all the information about the network topology to each other
    (which links are there, which links are up, which ones are down). 
•	Each router independently finds the shortest path spanning tree, from itself,
  to every other router in the network 

Dijkstra’s shortest path first algorithm (example of a “Link State Algorithm”)
1.	Exchange link state: A router floods to every other router the state of
    links connected to it, so that every router has a full topology map. They
    do this: 
    1.	Periodically 
    2.	When link state changes 
2.	Run Dijkstra: Each router independently runs Dijkstra’s shortest path first
    algorithm. 

Each router finds min-cost spanning tree to every other router.

An example: from R8
￼* See diagram *
•	First step: add the router that has the lowest cost path back to R8 (R7) 
  ◦	Merge R8 and R7 into a tree 
•	Next step: add the router that has the lowest cost into the R8-R7 tree 
•	…. 
•	Bottom line: 
  ◦	At each step you are adding the router with the lowest cost path, and
    because that is its lowest cost path, we know we’re done with that router. 

Dijkstra’s Algorithm
Questions:
1.	How long does the algorithm take to run? 
    1.	It will always run the number of iterations equal to the number of
        routers in the network. 
2.	What happens when link costs change, or when routers/links fail? 
    1.	Every time there’s a change in the link state, in other words, every
        time a link goes up or down, we recalculate from scratch 
        1.	The routers flood that state to every other router in the network 
        2.	They then re-run Dijkstra algorithm.   
    2.	Result: we don’t have to worry about things like “bad news travels
        slowly” 

Dijkstra’s algorithm in practice
•	Dijkstra’s algorithm is an example of a Link State algorithm. 
•	It is the basis of OSPF (Open Shortest Path First), a very widely used routing
  protocol in the Internet 

Another view of Dijkstra
•	Thanks to Prof Jean Walrand, Berkeley 
  ◦	If connect balls together with relative string length representing cost,
    gravity will show you the shortest cost path from a starting point at the
    top. 
  ◦	The loose strings are not a part of the minimum cost spanning tree 
￼* See Diagram *
￼
  ￼


`
        }
      ]
    },
    {
      id: 17,
      name: "Internet Structure",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.hierarchystructure.com/wp-content/uploads/2018/02/What-is-Internets-Hierarchical-Structure-1024x683.jpg",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Internet (RIP, OSPF) AS’s
Summary
	•	The Internet consists of multiple AS’s, each managed independently 
	•	An AS runs its own interior routing protocol 
	•	Stub AS’s use simple default routing. 
	•	AS’s with multiple exits must decide the best exit. 
	•	AS’s must connect using the BGP-4 protocol. 


Hierarchy in the Internet
The Internet is made up of millions of routers interconnecting over a billion
different users. So, simply for reasons of scale, we need to decompose routing
into smaller sets (Autonomous Systems)
	•	Imagine exchanging the link state information with a million other routers.
    The network would be flooded with updates all the time, and the distance
    vector algorithm would never converge.
* See diagram *

	•	Note: The Internet was built up by different entities. One of the original
    goals of the Internet was to allow each organization to independently decide
    how it would run its piece of the network (administrative autonomy). 
	  ◦	In many ways, this was a big factor in the success of the organic growth
      or the Internet, particularly during the 1990s. 
	  ◦	Each AS is free to use an Interior routing protocol of its choice. 

Autonomous Systems
•	The basic unit of hierarchy in the Internet. 
  ◦	Within an AS, the owner decides how routing is done 
  ◦	Between AS’s, must use BGP-4 (Border Gateway Protocol, v4)* 
    ▪	* defined by Internet RFC 1771 
    ▪	This allows for a consistent method of AS communication

Interior Routing Protocols
RIP (the first widely-used interior routing protocol in the Internet)
•	Uses distance vector (distributed Bellman-Ford algorithm). 
•	Defined in Internet RFC 2453 
  ◦	RIP version 2 is the one most widely used 
•	Updates sent every 30 seconds. 
  ◦	If it hasn’t heard from a router within 180 seconds, it will assume that the
    router has become unavailable 
•	No authentication for updates. 
•	Originally in BSD UNIX, “route-dee” daemon. 
  ◦	RIP’s initial popularity stemmed from it being in the BSD version of Unix 
  ◦	There was a daemon that was widely available for routers that were using RIP 
•	Widely used for many years; used less now. 
  ◦	Less used now because of RIP’s convergence problems. 
  ◦	Mostly replaced by OSPF or IS-IS (very similar to OSPF) 

OSPF
•	Link-state updates sent (using flooding) as and when required. 
  ◦	Flooding is used because when we are trying to find the topology of the
    network, we don’t know how to reach anyone. 
•	Defined in Internet RFC 2328 
•	Every router runs Dijkstra’s algorithm. 
•	Authenticated updates 
  ◦	This means that we’re sure they belong to the router that we are
    communicating with. 
•	Autonomous system may be partitioned into “areas”. 
  ◦	Because some autonomous systems are very big, it is common to partition them
    into areas. For example, the Stanford network is partitioned  into OSPF
    areas. 
•	Widely used, complex. 
  ◦	We are covering a gross simplification here, just the basic ideas of how
    OSPF works 
•	IS-IS (RFC 1142) is similar, and is also widely used. 

How do we leave an AS?
•	Once we know how to route packets within an autonomous system, how do we route
  them to a different autonomous system? 
•	Two cases to think about: single exit point, multiple exit points. 

Routing to a single exit point (easier case)
There is only one exit point, so routers within the AS can use default routing.  
	•	Each router knows all prefixes within AS. 
	•	Packets with an address for another AS are sent to the default router.   
	•	Default router is the border gateway to the next AS. 

Routing tables in single exit AS’s tend to be small.
	•	This is because each router only needs to hold the prefixes within its AS.
    Otherwise, it just forwards them out. 

Routing to multiple exit points
	•	Used by multi-homed enterprises and transit AS’s. 
	•	Each internal router must be told which exit point to use for a given
    destination prefix. 
	•	Requires very large routing tables to route to every prefix 
	  ◦	Tens or hundreds of thousands of prefix entries 

Approach 1: Hot-potato routing – send to closest exit point.
	•	If it is not for within the AS, the router sends it to the closest exit
    point 
	•	Hot-potato routing is seen as offloading, a somewhat selfish act by the AS.
    It’s offloading packets as quickly as possible to become someone else’s
    problem. This is not very popular with its neighboring autonomous systems. 
	•	Very widely used today in the Internet, for commercial and simplicity
    reasons. 
Approach 2: Pick exit closest to destination (or is on lowest cost path to
destination).
	•	This is a more elaborate approach. It requires the dissemination of more
    information within the AS, in order to make the decision. 

Exterior Routing Protocol
•	Every AS must interconnect using BGP-4. 
  ◦	The thin waist of routing protocols is BGP-4 
•	Problems BGP-4 was designed to solve 
  ◦	Topology: The Internet is a complex mesh of different AS’s with very little
    structure. 
  ◦	Autonomy of AS’s: Each AS defines link costs in different ways, so not
    possible to find lowest cost paths. 
    ▪	We’re simply going to have to find a set of paths based on the number of
      autonomous systems they pass through 
  ◦	Trust: Some AS’s can’t trust others to advertise good routes (e.g. two
    competing backbone providers), or to protect the privacy of their traffic
    (e.g. two warring nations). 
  ◦	Independent Policies: Different AS’s have different objectives (e.g. route
    over fewest hops; use one provider rather than another). 
    ▪	In general, these policies are kept secret 
    ▪	BGP-4 is designed to allow for that policy to be a local, private matter
      for the AS 

Internet structure
￼* See Diagram *
•	Tier 1 Internet Service Providers 
  ◦	There are about a dozen of these (AT&T or NTT in Japan) 
  ◦	ISPs that are fully mesh interconnected with each other and who peer each
    other without charging each other. It’s called settlement-free peering. In
    other words, no money goes across the (horizontal) interface between them. 
•	Regional ISP’s 
  ◦	Might correspond to a state, or a county, or a region of a country 
•	Access ISPs 
  ◦	There will be many access ISPs along the bottom 
  ◦	These are the ones that we connect to as users 
•	How the graph works 
  ◦	A provider is providing a service to the customer below it. 
  ◦	The provider will charge the customer a settlement charge to send packets
    from up a level. 
  ◦	Money is charged going up, but not going across horizontally. 
  ◦	Thus, Regional ISPs often have connections between them, so if there is a
    lot of traffic between access ISPs they can avoid the costs of going through
    the tier 1 ISPs 



`
        }
      ]
    },
    {
      id: 18,
      name: "Shannon Capacity, Shannon Limit",
      language: "markdown",
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
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.taitradioacademy.com/wp-content/uploads/2014/10/Image-8.png",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Modulation: ASK, FSK
•	Different ways to represent bits 
* See Diagram *

Amplitude Shift Keying (often used in wired systems)
•	ASK works well in wired networks because signal strength does not decrease
  much with distance 
  ◦	Used in most common wired Ethernet systems 
  ◦	Note: it’s works well in wired networks because the medium is controlled.
    The signal doesn’t decrease much with distance, because wires do not have a
    lot of resistance (that’s why they are used to carry power). 
•	PAM-5: five level pulse amplitude modulation (-2, -1, 0, +1, +2) 
  ◦	Used in 100BASE-T and 1000BASE-T Ethernet (100Mbps and 1 gigabit) 
  ◦	You can think of these as five voltage levels: -2, -1, 0, +1, +2 
•	PAM-16: sixteen level pulse amplitude modulation 
  ◦	Used in 10GBASE-T Ethernet (10 gigabit) 
  ◦	Needs more more levels of amplitudes to get all of its data through 

Modulation: PSK [adjusting the phase of the waves]
•	Note: he points out that 180˚ and -180˚ are the same in this case. He also
  says that the phase is being “reversed” 
￼* See diagram *

Phase Shift Keying (most wireless technologies or things over less controlled
media like cable modems and DSL use PSK or QAM)
•	PSK works well when there can be significant variations in signal strength 
  ◦	DSL, cable modems, wireless all use phase shift keying 
  ◦	Note: the variations in signal strength can be due to the medium. ASK
    doesn’t work as well in wireless situations because signal strength is less
    stable. 
•	Binary phase shift keying (BPSK) 
￼* See diagram *
  ◦	Two phases: (0, π) or (0, 180º) 
  ◦	Used in 1Mbps and 2Mbps 802.11b (WiFi) 
  ◦	Allows us to send one bit per wave 
•	Quadrature phase shift keying (QPSK) 
  ◦	Four phases: (0, π/2, π, 3π/2) or (0, 90º, 180º, 270º) 
  ◦	Used in 5.5Mbps and 11Mbps 802.11b (WiFi) 
  ◦	Allows us to send two bit per wave 

Shifting Phase
•	One reason PSK is very popular: it’s very easy to shift phase 
  ◦	Example: if you have a carrier wave at, say 0˚ and another carrier wave at
    -90˚, any linear combination of these two allows you to create any
    intermediate frequencies. 
    ▪	So, 0˚ + -90˚ = -45˚, 0˚ + -45˚ = 0, 0˚ + 90˚ = 45˚ 
      ▪	The brackets represent the coefficients for -90˚ and 0˚ 
      ▪	Green: -90˚, Blue: 0˚, Red: -45˚, Drawn Red: 45˚ 
      ▪	Tim note: he using the unit circle, not addition 
  ◦	This is exactly how hardware does it using I/Q modulation 
￼* See Diagram *
I/Q Modulation (how you build the hardware)
•	I: in-phase component (0º) 
•	Q: quadrature component (-90º) 
•	A symbol is a linear combination of I and Q 
  ◦	So, we can create any phase by combining I and Q with a linear factor 
  ◦	So, just be changing the scaling factors of I and Q, we can create any phase
    we want of a signal 
￼* See diagram *
  ◦	Binary phase shift keying (BPSK) 
    ▪	Two phases: 0º, 180º 
    ▪	(I,Q) = (1,0) (-1,0) 
  ◦	Quadrature phase shift keying (QPSK) 
    ▪	Four phases: 0º, 270º, 180º, 90º 
    ▪	(I,Q) = (1,0) (0,1) (-1,0) (0,-1) Tim note: pretty sure he should switch
      270˚ and 90˚ 

Tim note: he using the unit circle

I/Q Constellations [simple representation of what’s going on down at the
physical layer]
•	For phase shift keying, can represent symbols in an 
•	I/Q constellation, a 2D plot of the IQ values 
  ◦	Angle of vector: phase of signal 
  ◦	Length of vector: amplitude of signal 
￼* See Diagram *
•	Notes: 
  ◦	OOK: on-off keying (no change in phase) 
  ◦	He didn’t rotate the QPSK points to the small hand-drawn red dot locations,
    to make the phases easier to see. 

Symbols vs. Bits [at the physical layer the sequence of bits from the link layer
is transformed into a sequence of symbols]
•	A symbol is the unit of transfer at the physical layer 
•	A symbol can contain more than one bit 
  ◦	BPSK: 1 bit per symbol (0, 1) 
  ◦	QPSK: 2 bits per symbol (00, 01, 10, 11) 
•	Example: wired 100BASE-T Ethernet (100Mbps, Cat-5 cable) 
  ◦	5 voltage levels (5 symbols) of PAM-5 (-2, -1, 0, +1 +2) 

QAM [an approach used in almost all modern communication systems]
•	Amplitude shift keying and on/off keying use only amplitude to encode symbols 
•	Phase shift keying uses only phase to encode symbols 
•	Quadrature Amplitude Modulation (QAM) uses both amplitude and phase keying 
  ◦	16-QAM: 16 symbols, 4 bits/symbol 
  ◦	256-QAM: 256 different symbols, 8 bits/symbol 

Example: 16-QAM (IQ constellation used in HSPDA, 3G data standard)
•	This IQ constellation for 16-QAM shows the how the I and Q values correspond
  to bits above the physical layer (how symbols map to bits) 
•	With the markups below, he is showing how you would transmit 1011 1001 
  ◦	First you would send symbol (-3,3), then you would send symbol (-1,3) 
  ◦	So, the first signal has a phase of 135˚, the second has a phase of 105˚. He
    didn’t calculate the amplitudes. 
￼* See Diagram *
Examples Today
•	ASK/OOK: Wired Ethernet 
  ◦	Basically all wired Ethernet uses ASK 
•	FSK: NWS “Weatheradio,” Bluetooth uses it in some forms 
  ◦	It’s very rare of communication systems to use FSK 
•	BPSK: 802.11abgn, WiMAX 
  ◦	Basically all the WiFi standards 
•	QPSK: 802.11abgn, 802.15.4 (low power wireless like Zigbee), HSPDA, LTE, WiMAX 
•	16-QAM: 802.11abgn, HSPDA, LTE, WiMAX 
•	64-QAM: 802.11abgn, LTE, WiMAX 

Bottom line: the more modern standards are using denser constellations, because
people have made things go faster.


`
        }
      ]
    },
    {
      id: 20,
      name: "Coding (list a few algorithms)",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

SNR/BER Curves
•	For a given modulation scheme and signal-to-noise ratio, you can compute the
  expected bit error rate 
  ◦	Making some mathematical assumptions about noise 
  ◦	Bedrock principle of RF communication theory 
•	Bit error rate can become arbitrarily low, but never reaches zero! 
•	In practice, the math works out that sending packets as raw bits is very
  Inefficient 
  ◦	Expected data throughput is far, far below Shannon limit 

Bits vs. Symbols
•	What you do in practice at the physical layer: 
  ◦	You transform the packet’s data (bits) into symbols, with some amount of
    redundancy (some amount of error correcting codes). So, the packet will
    actually get a little longer in terms of bits we’re sending at the physical
    layer 
•	Example: 
  ◦	We have 48 bits, but we send 60 symbols. So, there’re 12 extra bits 
  ◦	We’ve arranged the 60 symbols into something called “coding” so that if a
    couple bits are wrong, we can recover from that and still get the original
    48 bits 
￼* See Diagram *
Coding
•	Adding a little redundancy at the physical layer can greatly improve link
  layer throughput 
  ◦	True both in theory and in practice 
	  ▪	The cost of this little bit of extra redundancy is much, much smaller than
      its benefit.
  ◦	Note: you can do it anywhere, but it’s almost always done at the physical
    layer 
•	Coding gain: the ratio of bits at link layer to bits at physical layer 
  ◦	1/2 code: each link layer bit is 2 physical layer bits 
  ◦	3/4 code: each 3 link layer bits are 4 physical layer bits 
• Forward error correction (FEC): proactively adding some additional data
  (redundancy) so recipient can correct potential errors 
	◦	This is nice because the recipient will be able to to decode the data; it
    saves you the cost of having to resend data. 


Example: 802.15.4 (QPSK) Used in Zigbee
•	Each transmitted symbol has two bits 
•	802.15.4 combines two QPSK symbols into a 4-bit symbol 
  ◦	Each one of the 16 4-bit symbols maps to 32 QPSK chips. 
  ◦	So 4-bit link layer symbols are transformed into 32-bit physical layer
    symbols. 
￼* See Diagram *
Calculating Data Rate
bitrate = bits/symbol * symbol rate * coding rate

Example: 802.15.4
•	Bitrate: 250kbps 
•	Coding rate: 16 chips of 2 bits (32 bits) = 4 bits 
  ◦	So we have a ⅛ code. 
  ◦	So, at the physical layer we are transmitting 8*250kbps = 2Mbps or 1 million
    symbols/s (1 symbol has two bits). So each symbol is 1µs. 

Example: 802.11n [a more advanced physical layer]
•	Many options (just showing a subset) 
  ◦	Note: The 40Mhz channel is a little better than twice as fast as the 20MHz
    channel because these time values are fixed, and there are some guards 
￼* See diagram *
Overview
•	Chips (physical layer) versus bits (link layer) 
  ◦	Bits are transformed into chips at the physical layer 
•	Physical layer must deal with noise, which can cause chip errors 
  ◦	Denser modulation provides higher throughput (more bits per symbol) 
  ◦	Sparser modulation has fewer errors (more robust to noise) 
•	Translating between link layer bits and physical layer bits 
  ◦	1:1 mapping is rarely the most efficient data representation 
    ▪	It’s rarely going to let you get close to the Shannon capacity 
    ▪	The probability of bit errors means you want some redundancy. 
  ◦	Coding gain: L2/L1 ratio, so can be robust to some chip errors 
    ▪	Note above: L = Layer 
•	Example: 802.11n 

Error correcting codes: (end of course notes)
•	Generally we use error correcting codes in environments where bit errors are
  frequent, or where the cost of retransmitting a corrupted packet would be
  high, for example: in a network with a very large bandwidth-delay product 

Coding Algorithms
•	There are many, many coding algorithms, with different tradeoffs 
  ◦	Hamming codes, convolutional codes, LT codes, LDPC, Turbo codes, Tornado
    codes, Raptor codes... 
•	Reed-Solomon error correction 
  ◦	Tremendously commonly used (e.g., CDs, DVDs, DSL, WiMax, RAID6 storage) 
  ◦	Mathematically simple (compared to some of the others) 
    ▪	The basic concept is simple (what we’ll look at), designing it for very
      fast implementation is harder (we’ll skip) 


Reed-Solomon Basic Idea
•	Take k chunks of data 
•	Represent the data as the coefficients of a k-1 degree polynomial 
•	Compute n points along the polynomial (n ≥ k-1), send those points as coded
  data 
  ◦	Any k of the n points allow you to recover the polynomial coefficients 
•	Complications: value of n computed points must be in a finite field (limited
  number of bits) 
  ◦	Basically, you need to be able to represent each point with a finite number
    of bits 

`
        }
      ]
    },
    {
      id: 21,
      name: "Why is data transmitted using a clock? (Lower Layers)",
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Chart: https://www.ntia.doc.gov/files/ntia/publications/january_2016_spectrum_wall_chart.pdf

Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about
￼
◦	So RF is at a frequency below visible light. 

•	The Radio Spectrum: 
  ◦	So you can see there's a huge chunk of spectrum going all the way from 3kHz,
    when you have 3000 waves per second, up to 300GHz, up or 300 billion waves
    per second. 
  ◦	So, if given that electromagnetic radiation moves at 1ft/ns, at 3kHz you're
    looking at waves that are on the order of 300,000 feet long. Whereas down to
    the 300 gigahertz range. You're looking at waves that are 1/300th of a foot
    long. 
  ◦	So a huge, huge range of frequencies for all kinds of things: TV, radio,
    data communication, maritime systems, military systems, satellites, etc. 
  ◦	Access point Networks: 
    ▪	When we talk about access point networks and modern data communication
      systems, we're talking about these four narrow chunks. 
      ▪	See the slide. He points out Telephony and WiFi 
      ▪	So when you think about all of the data communication that we use today,
        phones and laptops, it's all squished into these four tiny little
        slices. 
`
        }
      ]
    },
    {
      id: 25,
      name: "How does Signal Strength work with wireless?",
      language: "markdown",
      tabs: [
        {
          image_src: "https://www.isa.org/uploadedImages/Content/Standards_and_Publications/ISA_Publications/InTech_Magazine/2008/April/2008_04_53(1).gif",
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Wireless is a shared medium
•	So the first thing to realize about wireless is that, unlike in a wired
  network where the medium, the wire, is completely under your control (there's
  nobody fighting you for the capacity of that wire. It's for you and you alone)
  . In the wireless environment you're using the electromagnetic spectrum around
  you which everyone else might be wanting to use as well.
•	It's not a controlled medium. It's a shared medium. So, in practice, what this
  means is that it is very tightly regulated.

Wireless Is Different
•	Wireless transmission medium is not a wire 
  ◦	Unlike something propagated on a wire, where there's some attenuation or
    there's some resistance in the copper, a wireless signal is radiating over
    space. 
•	Radiates over space 
  ◦	Signal weakens with distance: r^2 or faster 
    ▪	In the simplest, if you have a perfect omnidirectional antenna, it's
      basically radiating in a sphere, out. And what this means is that the
      signal strength degrades with distance at R^2 or faster. A signal when you
      are twice as far away from a transmitter, the signal is at least
      attenuated by 75%. It's at a quarter of the strength. Think of the surface
      of a sphere. 
  ◦	Intermediate links (Tim note: I think he skipped this) 
•	Uncontrolled medium 
  ◦	Signal strength changes over time 
    ▪	Unlike in a wired system, where we can know, for example, as long as the
      cable good and it's no longer than 100 meters, we're going to have a
      strong signal strength, in wireless systems, you often have a very weak
      signal strength. 
    ▪	Wireless is out in the world around you. so, it can be that somebody steps
      between you and your access point. Now, suddenly, all these wireless
      signals have to go through that person, basically, a big bag of water, the
      wireless is going to become much weaker. So, the signal strength is going
      to change significantly over time. As people open doors, people move
      around, as you move around, as the humidity changes. 
  ◦	Interference from other transmitters 
    ▪	Furthermore, everyone else is using the medium as well. There's lots of
      interference. It's not like you have this wire to yourself. Instead, the
      person next door might be using their wireless network, which is on the
      same frequency. 

Signal Strength
•	Obstructions can further weaken signal 
  ◦	The problem here is that there are obstructions in the real world, they can
    move around, and they weaken the signal. 
  ◦	If you stand behind a metal plate, your wireless signal will be much weaker
    than if you stood in front of it. 
•	Wireless signals can reflect 
  ◦	Multipath: can receive signal in multiple paths/reflections, with different
    delays (analogy: echoes in a canyon) 
`
        }
      ]
    },
    {
      id: 26,
      name: "Ethernet, Ethernet most commonly used wired network",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

When we connect our computer to the network today, we’re usually using WiFi for
wireless, or Ethernet for a wired connection. Ethernet is by far the most widely
used link layer mechanism in the Internet today.

The origins of Ethernet
Ethernet started out as a means to connect multiple computers together on a
single cable.
	•	That single cable was arranged as a long string or a bus, as shown here. 
	  ◦	It was, in fact, a big, thick, yellow cable that snaked around, either in
      the walls, the ceiling, or under the floor. And computers would be
      connected down into it, and then they are all sharing access to the same
      common wire 
	•	The idea was, that they would share it in order to be able to send packets
    between themselves. But only one packet would be allowed onto the cable at a
    time because, otherwise, it would collide or corrupt and interfere with
    other packets. 
Sharing a “medium”
	•	Ethernet is an example of multiple hosts sharing a common cable (“medium”). 
	•	To share the medium, we need to decide who gets to send, and when. 
	•	There is a general class of “Medium Access Control Protocols”, or MAC
    Protocols. 
	  ◦	These are the protocols or algorithms for determining who gets to send
      next. 
	•	We will take a look at some examples. 
	  ◦	You've probably heard Ethernet addresses being referred to as MAC
      addresses before. You may even see this written on the bottom of your
      computer. 
	      ▪	MAC stands for medium access control, even though we'll see later,
          Ethernet doesn't use this mechanism very much anymore. That's just a
          vestige of the earlier 10Mb/s version of Ethernet. 
Ethernet
Ethernet started in the early 1970s, originally at around, ten megabits per
second. But it has evolved a long way since then.
	•	In this first place, CSMA/CD was right at the heart of how Ethernet worked,
    and determined how many hosts would share a single cable. It became less
    important as the speed went up. 

The 10Mb/s Ethernet Standard (IEEE 802.3)
The original 10Mb/s Ethernet was standardized in IEEE 802.3. You'll often hear
Ethernet being referred to as a dot three network for this reason, Just as an
abbreviation of 802.3. This was just the standard's body name that was used to
write the spec that defined the correct operation of Ethernet. It has two
components
	•	The MAC protocol and the frame structure that we've just seen. 
	•	Underneath, you have different options for the physical layer that could be
    used. 
￼* See diagram *
	•	10Base-5: Original Ethernet: large thick coaxial cable. 
	  ◦	There was originally 10Base-5, which was that big, thick, yellow cable
      that I described earlier. That went out of fashion quite a long time ago. 
	•	10Base-2: Thin coaxial cable version. 
	  ◦	10Base-5 was replaced by a thin coaxial cable version that used the
      coaxial cable similar to the RF cables we use for TV.   
	•	10Base-T: Voice-grade unshielded twisted-pair Category-3 telephone cable.
	  ◦	But what really transformed Ethernet was when it started to use this type
      of cable here. This is the RJ45 cable that we're all very familiar with.
	    ⁃	And that was not because of the connector. 
	    ⁃	It was because of the type of cable that it can use, and also the
        topology of the network, and we'll see that in a moment. 
	    ⁃	But basically, it started to run over voice grade, unshielded twisted
        pair that was already present in the walls of many buildings. It's
        called category three telephone cable, it's fairly low-grade cable that
        was used for connecting telephones to the exchange at a company.


	•	10Base-F: Two op/cal fibers in a single cable. 
	  ◦	There's also an optical fiber version called 10Base-F. 
	    ▪	It was originally used mostly by the military because they're harder to
        tap. 
	    ▪	There were two optical fibers and a single cable, one for each
        direction. 

10Base-T (“Twisted pair Ethernet”)
￼* See Diagram *

	•	Ran over existing voice-grade “Category-3” twisted pair telephone wire. 
	  ◦	Ethernet really took off when the 10Base-T standard came along for running
      Ethernet over twisted pair. So, 10Mb/s was carried over Category-3 twisted
      pair telephone wires that already existed in pretty much every building in
      the world. 
	•	“Star” wiring worked well with wiring closets. 
	  ◦	They were arranged in a star. In other words, those, those twisted pair
      cables would go to a wiring closet on their way to the telephone exchange. 
	•	Centralized management made networks easier to manage. 
	  ◦	So, Not only did the twisted pair cable really help Ethernet be successful
      but this topology of having an end host connected by twisted pair into a
      hub. And a hub was a repeater, it would take every signal coming in and
      then repeat it over every outgoing cable except for the one through which
      it entered. So, it didn't actually understand the packets, it would merely
      repeat them electrically. 
	  ◦	If there was a collision, then the collision would take place anywhere
      within here (from the end hosts and the router to the hub), it would be
      detected, and the hub would make sure that the voltage levels were
      sufficient to make sure that it could be detected. 
	  ◦	Also, this centralized management in this hub this would be managed by the
      network administrator. And this central management, rather than the
      distributed management of crawling under the floorboards, or up in the
      attic made it much easier to manage Ethernet once these hubs were placed
      in these central locations. 
	•	This led to a huge growth in Ethernet in mid 1980s. 

Increasing the data rate (10Mb/s -> 100Mb/s -> 1Gb/s -> 10Gb/s)
Over the years, people wanted to make Ethernet faster. So, 10Mb/s gradually was
increased to a 100Mb/s and then, 1Gb/s, and more recently, 10Gb/s. So, a 1000
times faster than the original Ethernet spec.

Faster and Faster
As we made it faster and faster, the Ethernet MAC protocol stayed the same.
That's the framing structure and the way in which we decide when to send packets
onto the wire. That stayed the same for a while.
	•	The 100 megabit per second Ethernet was called Fast Ethernet. 
	  ◦	It doesn't seem so fast these days. 
	  ◦	And there were two standards for the physical layer. 
	    ▪	100Base-TX, which was the coding structure used for twisted pair cable
        and then, 100Base-FX for optical fiber. 
	•	Then later came along the one gigabit Ethernet standard. 
	  ◦	There was the 1000BASE-T and the 1000BASE-FX. 
￼* See Diagram *
100Base-TX:  
	•	Uses “Category 5” cable, RJ45 connector. 
	•	Full duplex: one pair for 100Mb/s in each direction. 
	  ◦	It actually started to be full duplex, meaning there were two pairs that
      were used, rather than just one within the cable. One pair was used for
      100Mb/s signaling in each direction. 
	•	Physical layer: 4B5B encoding. 
	  ◦	Instead of using the Manchester encoding, it started to use 4B5B encoding
      which we saw as the means to introduce transitions for clock recovery. We
      saw that in the video about clocks. 
	•	100m max distance 
	  ◦	Of course, it was limited to a distance of a hundred meters.   

1000Base-T:  
	•	“Category 5” cable, RJ45 connector. 
	  ◦	The 1000BASE-T standard also runs over category five cable using the RJ45
      connector, as many of the laptops and servers that are sold today, the
      Ethernet in them is 1Gb/s or a 1000BASE-T. 
	•	Four pairs used simultaneously in both directions. 
	  ◦	It turns out it's very hard carry a 1Gb/s signal over a Category 5 cable.
      So, they actually use four pairs inside the cable, and they carry signals
      in both directions at the same time over all four pairs. 
	  ◦	So, there's no room for anything else on this cable. It can only be used
      for the gigabit Ethernet. 
	•	Complex coding; 5-level signaling. 
	  ◦	It uses a very complex coding which is beyond the level of what we are
      going to be describing in this class and it uses five level signaling. So,
      instead of just using a binary on off as was used in the original 10Mb/s
      Ethernet, It uses five different levels to try and pack as much
      information onto the cable as it can. 
	•	100m max distance 


Summary
	•	MAC Protocols: Random and Deterministic.   
	  ◦	Medium access control protocols come in two main flavors: random access
      and deterministic. 
	  ◦	Random access protocols proved very popular, because they're nice and
      simple, they give transmitting hosts a nice, quick, low delay access to
      the network when it's being lightly used. 
	•	CSMA/CD is a simple, random access protocol used in the first 10Mb/s version
    of Ethernet. 
	  ◦	And over the years, CSMA/CD became the most popular random access
      protocol. 
	•	Ethernet standards emerged for 100Mb/s, 1Gb/s and 10Gb/s over the last 20
    years. 
	   ◦	100Mb/s is called “fast Ethernet”
`
        }
      ]
    },
    {
      id: 27,
      name: "Ethernet Hubs vs. Switches",
      language: "markdown",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about

Ethernet Switching
By the late 1980s, 10Base-T Ethernet was extremely popular. There was already
work going on, on 100 megabit per second Ethernet and it was clear that the
networks would get faster and faster.
•	10BaseT meant hubs/repeaters in the wiring closet. 
  ◦	The hubs in the repeaters in the wiring closets meant that the network could
    be really quite large and were being deployed on a very large scale. 
•	100Mb/s and 1Gb/s Ethernet meant 100m limit. 
  ◦	But it was clear also that for faster and faster networks, each of the
    segments was going to get very, very short, just down to a 100 meters. 
•	The need to partition Ethernet networks to reduce the “collision domain”. 
  ◦	With a large number of hosts sharing a small network, the networks tended to
    be overwhelmed with the number of collisions that they would see, because
    there were so many hosts all trying to talk on the same network 
  ◦	So it became natural to try and partition those Ethernet networks to reduce
    the number of collisions, what's often referred to as reducing the collision
    domain.   
•	Cost of switching hardware came down. 
  ◦	At the same time, the cost of switching hardware was coming down. It became
    easier to build ASICs, or specialized chips for doing the switching. 
•	Led to Ethernet Switching… 
  ◦	And so, all these things together led to partitioning networks using
    Ethernet switches. 


Hubs to Switches
￼* See Diagram *
Hub/Repeater:
•	with a hub or a repeater, every time a packet is sent, the whole medium of all
  of these five links would become busy, and would be used up. 
  ◦	Within this circle here, the entire capacity is, say, 10Mb/s or 100Mb/s,
    depending on the rate. 
  ◦	With large networks with, say, hundreds of end hosts all connected to a hub
    or a set of hubs, This would be very limiting in the total overall capacity
    that they had to use. 
Better Solution?
•	What if we could allow several communications to take place at the same time? 
  ◦	So, for example, if A wants to talk to B at the same time that C is talking
    to D. 
  ◦	Because they're talking to different sets of hosts, why don't we allow the
    communications to take place independently? 
•	So, instead of the hub repeating the signal just as an electrical signal, what
  if it was to actually interpret the packets, and send the packets only to the
  correct destination, just like a router does, but based on the Ethernet
  addresses rather than the IP addresses? 

Switch: Before being called Ethernet switches, they were called bridges. You
will see, see those referred to sometimes, but we're just going to call them
Ethernet switches.
•	Basic Operation: 
  ◦	The basic operation is if A is sending to B, the packet will flow down to
    the switch. The switch will look at the Ethernet address, to decide where to
    send it next. If it has it in its table, then it will forward it to B. At
    the same time, perhaps C is sending a packet to D, and the same thing will
    be happening over here, independently. 
•	Collisions: 
  ◦	So, the collisions now are just held within a single cable. So, if there
    happen to be signals going in both directions on the cable at the same time,
    that might cause a collision. 
  ◦	Although, at the same time, there was also introduced something called Full
    Duplex Ethernet which was exploiting the fact that communications could take
    place on the cable in both directions without colliding with each other at
    the same time. And so now, the switch could operate without the use of
    CSMA/CD completely once the switches were introduced and all of the links
    were full duplex. Tim note: is this because the full duplex cables used
    different pairs for different directions? 
•	Pervasiveness: 
  ◦	So, This led to the very first Ethernet switches being developed in the
    early 1990s. And nearly all Ethernet networks today are based on Ethernet
    switches. It's very unusual to see an Ethernet hub these days. In fact, for
    one gigabit per second and ten gigabit per second Ethernet, there is no
    choice all those networks are switched. 
•	Advantages: 
  ◦	So, the advantages are multiple concurrent communications, full duplex
    links, (they can send and receive at the same time) and also there is a
    management benefit, that if there are dead or faulty end hosts, they could
    be isolated by the switch, you could just switch off the link and then
    isolate it from the network completely to prevent it from harming any other
    switches in the network. 



Ethernet Switch Operations
Forwarding and Learning:
1.	Examine the header of each arriving frame. 
    1.	So, when a frame arrives, first of all, it examines the header of each
        arriving frame to check for the destination address.   
2.	If the Ethernet DA is in the forwarding table, forward the frame to the
    correct output port(s). 
    1.	If the Ethernet destination address is in its forwarding table, it will
        forward the frame to the correct outgoing port. Or if it's multicast,
        the set of ports. 
3.	If the Ethernet DA is not in the table, broadcast the frame to all ports
    (except the one through which the frame arrived). 
    1.	If the Ethernet destination address is not in its table, it will
        broadcast the frame to all ports of the switch except the one through
        which the frame arrived.   
4.	Entries in the table are learned by examining the Ethernet SA of arriving
    packets. 
    1.	Entries in the table are learned by examining the, the Ethernet source
        address of arriving packets. 
    2.	So, it will take the, the source address, look it up in the table. If
        it finds that it's not there, it will populate the table with that entry
        that says, "Okay if ever I see this as a destination address, I now know
        how I reach it by sending it back out of the port that this address is
        connected to." So, that way, the next time the frame won't be broadcast,
        it will just be sent on to its correct destination. 

Topology Maintenance: Run Spanning Tree Protocol (STP) to create loop free
topology.
•	It runs the spanning tree protocol, where it exchanges those things called
  bridge protocol data units (the BPDUs that we saw in the spanning tree video),
  and it runs the spanning tree protocol to talk to the other switches to create
  a loop free topology. 
•	That allows it to decide which ports to enable or block, to make sure that it
  creates a loop free spanning tree among all of the switches in the network. 

Slide with No Title
￼* See Diagram *
Ethernet switches are very, very widely deployed. Here's an example of how that
might look in, say, a university campus. This is pretty much how our college
networks looks at Stanford.
•	Inside each building (one group of end hosts and a switch): 
  ◦	So this might be a building or one floor of the building. This could be the
    third floor of my building: the Gates building at Stanford. 
  ◦	This could be the second floor, there's another switch for that floor. 
•	And then, they connect into the building router. They would often be connected
  into another router in another building for, fault tolerance in case the, the
  building router was to fail (dashed arrow line). 
  ◦	And this router may be running OSPF for routing packets across our campus. 
  ◦	So, these routers form the campus backbone that spread all across our
    college campus. 
•	And then they would eventually connect to a BGP router, that connects to the
  public internet. 
  ◦	So, this is speaking the BGP protocol to the outside world to exchange
    prefixes for paths to the outside world. 
•	So, Ethernet switches can connect many, many hosts, sometimes hundreds of
  hosts together. There are switches available with hundreds of ports. They then
  connect perhaps all the end hosts in the building, or in the floor of a
  building. 


Summary
•	Limits on link size and the need for more capacity meant that CSMA/CD was
  gradually replaced by Ethernet switching in which end-hosts typically connect
  over a full duplex link, and so, can both send and receive at the same time.   
•	Ethernet switches do pretty much full routing, like a router does, but on the
  Ethernet addresses. 
  ◦	They learn the Ethernet addresses to populate their tables by learning the
    source address of packets that go by. That way, they build up a nice, simple
    forwarding table. 
  ◦	And they use the spanning tree protocol to build a loop free topology
    connecting all the switches within the network. 

So, as a consequence, Ethernet switches are ubiquitous today and used in pretty
much every organization that has a wired network.



 


`
        }
      ]
    },
    {
      id: 28,
      name: "Three Ways Communication Can Be Compromised",
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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
      language: "markdown",
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
