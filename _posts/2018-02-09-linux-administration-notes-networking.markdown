---
layout: post
title:  "Linux Administration - Notes: Networking"
date:   2018-02-09 11:11:11 -0500
categories: linux networking
---

Content

* TOC
{:toc}

# IP Addresses

## TCP/IP
- TCP (Transmission Control Protocol): controls data exchange.
- IP (Internet Protocol): sends data from one device to another.
- Hosts: devices on a network that have an IP address.

## IP Networking
- IP Address, e.g. `199.83.131.186`.
- Subnet Mask, e.g. `255.255.255.0`.
- Broadcast Address, e.g. `199.83.131.255`.

## IP Address
- Comprised of two parts:
  - Network Address: tells routers what network the host belongs to and thus where to route data that is destined for that host.
  - Host Address: tells the router the specific device where that the data should be delivered to.
  - For proper routing to work properly, each group of devices or network needs to have a unique network address. Also each device within that network, needs to have a unique host address.
- The class of an address determines what portion is used as a network address and what portion is used for the host address.

## Classful Networks

|-------+--------------+---------------+-------------------+---------------------+--------------------------|
| Class | Leading Bits | Start Address |    End Address    | Default subnet mask |   Addresses per network  |
|:-----:|:------------:|:-------------:|:-----------------:|:-------------------:|:------------------------:|
| A     | 0            | `0.0.0.0`     | `127.255.255.255` | `255.0.0.0`         | $$2^{24} = 16,777,216 $$ |
| B     | 10           | `128.0.0.0`   | `191.255.255.255` | `255.255.0.0`       | $$2^{16} = 65,536 $$     |
| C     | 110          | `192.0.0.0`   | `223.255.255.255` | `255.255.255.0`     | $$2^{8} = 256 $$         |

**Class A**  
`000.000.000.000 = 00000000.00000000.00000000.00000000`  
`127.255.255.255 = 01111111.11111111.11111111.11111111`

**Class B**  
`128.000.000.000 = 10000000.00000000.00000000.00000000`  
`191.255.255.255 = 10111111.11111111.11111111.11111111`

**Class C**  
`192.000.000.000 = 11000000.00000000.00000000.00000000`  
`223.255.255.255 = 11011111.11111111.11111111.11111111`  

## Broadcast Address
- A special logical address used to send data to all hosts on a given network.
- To determine the broadcast address of a given network address, just replace the `000` in the subnet mask by `255`.

## CIDR
- Classless Inter-Domain Routing.
- Allows networks to be subdivided regardless of their traditional class.
- For example:
  - IP: `121.67.198.94` (Class A)
    - Network: `121.0.0.0`
    - Subnet: `255.0.0.0`
    - Broadcast: `121.255.255.255`
  - IP: `121.67.198.94` Subnet: `255.255.255.0`
    - CIDR Network: `121.67.198.0`
    - CIDR Subnet: `255.255.255.0`
    - CIDR Broadcast: `121.67.198.255`

## Reserved Private Address Space

Non routable IP addresses (they are not routed through the public internet).

|-------+----------------+-------------------|
| Class | Start Address  |    End Address    |
|:-----:|:--------------:|:-----------------:|
| A     | `10.0.0.0`     | `10.255.255.255`  |
| B     | `172.16.0.0`   | `172.31.255.255`  |
| C     | `192.168.0.0`  | `192.168.255.255` |

## Determining your IP address
- To show a list of all the IP addresses in use on your system:
  - `ip address` / `ip addr` / `ip a`
  - `ip address show` / `ip a s`
  - `ifconfig` (command "supposedly" deprecated...) 
- `lo` device: loopback device, a special virtual network interface that the linux system uses to communicate with itself, often with the address: `127.0.0.1` 

# Hosts and DNS

## Hostname
- A host is a device connected to a network. In case of the TCP/IP, a host is a device with an IP address.
- A hostname is simply a human-readable name that corresponds to an IP address.
- E.g. `webprod01 = 10.109.155.174` is also called unqualified hostname or short hostname.

## DNS hostnames
- DNS: Domain Name System, translate human readable names into IP addresses (and the reverse as well).
- FQDN (or long hostname): Fully Qualified Domain Name, e.g. `webprod01.mycompany.com` (each section is separated by a comma `.`).
- TLD: Top Level Domain, it's the rightmost portion of the DNS name, e.g. `.com`, `.net`, etc.
- Domain: appears just to the left of TLD
- Sub-domain: domains can be subdivided...

## Display the hostname
- Short hostname: `hostname` / `uname -r`.
- Long hostname (or FQDN) : `hostname -f`.

## Set the hostname
- Temporary: `hostname [hostname]`.
- Permanent: `echo 'webprod01' > /etc/hostname` .

## Resolving DNS
- Resolve IP address: 
  - `host [hostname]`.
  - `dig [hostname]`.
  - `nslookup [hostname]`.
- Resolve hostname: 
  - `host [ip_address]`.
  - `dig -x [ip_address]`.
  - `nslookup [ip_address]`.

## /etc/hosts
- Entry Format: `[ip_address] [FQDN] [aliases]`.
- E.g. `10.11.12.13 webprod02.mycorp.com webprod02`
- Then can be refered with the alias(es). 
- Usually the first line is `127.0.0.1 localhost` (loopback).
- Entries added are not automatically available in the DNS.

## /etc/nsswitch.conf
- Typically the `/etc/hosts` is checked first before a DNS server is queried.
- NSS: Name Service Switch
- Controls the search order for resolutions.
- Entry format: `hosts: [search_resolutions]`
- E.g. `hosts: files nis dns`

# Network Ports
- When a service starts it binds itself to a port which ranges from 1 to 65,535.
- Ports 1 - 1,023 are well-known ports (system ports / privileged ports, they are pre-assigned and require super user rights to change thei binding):
  - 22: SSH
  - 25: SMTP
  - 80: HTTP
  - 143: IMAP
  - 389: LDAP
  - 443: HTTPS

## /etc/services
- Maps port names to port numbers.
- Entry Format: `[service] [port_number]/[protocol] #[comments]`.
- E.g. `ssh     22/tcp    # SSH Remote Login Protocol`.

# IP Address Assignation

## DHCP
- Dynamic Host Configuration Protocol.
- DHCP client sends a broadcast message looking for a DHCP server.
- DHCP server responds with an IP address and other information:
  - Netmask
  - Gateway
  - DNS servers
- Each IP is "leased" from the pool of IP addresses the DHCP server manages.
- The lease has an expiration time upon which the client must renew the lease, otherwise the IP address is available to other DHCP clients.

## /etc/network/interfaces
- (Configuration for Ubuntu).
- Assign DHCP to a device (`interface` can be `eth0`):
  - `auto [interface]`
  - `iface [interface] inet dhcp`
- Assign a static IP address:
  - `auto [interface]`
  - `iface [interface] inet static`
  - `address 10.109.155.174`
  - `netmask 255.255.255.0`
  - `gateway 10.109.155.1`
- Changes can be applied with:
  - `ifup [network_device]`.
  - `ifdown [network_device]`.

## Manually assign an IP address
- With the `ip` command:
  - Format: 
    - `ip address add [ip_address][/netmask] dev [network_device]` (`/netmask is` optional)
    - `ip link set [network_device] up`
  - E.g. 
    - `ip address add 10.11.12.13/255.255.255.0 dev eth0`
    - `ip link set eth0 up`
- With the `ifconfig` command (still supposedly deprecated):
  - `ifconfig [network_device] [ip_address] netmask [netmask]`  
  - `ifconfig [network_device] up`

# Troubleshooting

## ping command
- Test connectivity by sending one or more ICMP packets to a host and waits for a reply.
- Format: `ping -c [count] [host]`
- E.g. `ping -3 google.com`
- If no `-c [count]` is specified then ping keeps sending ICMP packets until the user press `Ctrl + C`.
- Note: RTT stands for Round Trip Time (time between the moment the request is sent and when the response is received).

## traceroute command
- Examine the route to an endpoint.
- Require root privileges.
- Syntax: `traceroute [hostname or ip_address]`
- To avoid dns resolution during the process, you can use the parameter `-n`.
- Produce one line of output per hop.

## tracepath command
- Can be used without root privileges.
- Syntax: `tracepath [hostname or ip_address]`
- Same as traceroute: to avoid dns resolution during the process, you can use the parameter `-n`
- Produce one line of output per response it receives: ok for simple checks, if you need more you can use `traceroute`.

## netstat command
- Collect a wide variety of network information.
- Syntax: `netstat [options]`
- Some options:

|---------+----------------------------------------------------------|
| Options |                        Description                       |
|:-------:|----------------------------------------------------------|
| `-n`    | Display numerical addresses and ports.                   |
| `-i`    | Display a list of network interfaces.                    |
| `-r`    | Display the route table (netstat `-rn`).                 |
| `-p`    | Display the PID and program used.                        |
| `-l`    | Display listening sockets (netstat `-nlp`).              |
| `-t`    | Limit the output to TCP (netstat `-ntlp`).               |
| `-u`    | Limit the output to UDP (netstat `-nulp`).               |
  
## tcpdump command
- Perform packet sniffing.
- Some options:

|---------+---------------------------------------------|
| Options |                Description                  |
|:-------:|---------------------------------------------|
| `-n`    | Display numerical addresses and ports.      |
| `-A`    | Display ASCII (text) output.                |
| `-v`    | Verbose mode. Produce more output.          |
| `-vvv`  | Even more verbose output.                   |

## telnet command
- Used for interactive communication with another host.
- Syntax: `telnet [hostname or or ip_address] [port]`.
- Example: `telnet google.com 80`
