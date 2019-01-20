export default {
  name: "Unix Command Line",
  data: [
    {
      id: 0,
      name: "What is the shell?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
•	When we speak of the command line, we are really referring to the shell. 
•	The shell is a program that takes keyboard commands and passes them to the
  operating system to carry out. 

•	Almost all Linux distributions supply a shell program from the GNU Project
  called bash. 
  ◦	The name “bash” is an acronym for “Bourne Again SHell”, a reference to the
    fact bash is an enhanced replacement for sh, the original Unix shell program
    written by Steve Bourne. 
`
        }
      ]
    },
    {
      id: 1,
      name: "What are Terminal Emulators ",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
•	Terminal Emulators 
  ◦	When using a graphical user interface, we need another program called a
    terminal emulator to interact with the shell. 
    ▪	If we look through our desktop menus, we will probably find one. 
    ▪	KDE uses konsole and GNOME uses gnome-terminal, though it's likely called
      simply “terminal” on our menu. 
    ▪	There are a number of other terminal emulators available for Linux, but
      they all basically do the same thing; give us access to the shell 
`
        }
      ]
    },
    {
      id: 2,
      name: "What is text?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
◦	There are many ways to represent information on a computer. All methods
  involve defining a relationship between the information and some numbers that
  will be used to represent it. Computers, after all, only understand numbers
  and all data is converted to numeric representation. 
◦	Some of these representation systems are very complex (such as compressed
  video files), while others are rather simple. One of the earliest and simplest
  is called ASCII text. ASCII (pronounced "As-Key") is short for American
  Standard Code for Information Interchange. This is a simple encoding scheme
  that was first used on Teletype machines to map keyboard characters to
  numbers. Text is a simple one-to-one mapping of characters to numbers. It is
  very compact. Fifty characters of text translates to fifty bytes of data. It
  is important to understand that text only contains a simple mapping of
  characters to numbers. It is not the same as a word processor document such as
  one created by Microsoft Word or LibreOffice Writer. Those files, in contrast
  to simple ASCII text, contain many non-text elements that are used to describe
  its structure and formatting. Plain ASCII text files contain only the
  characters themselves and a few rudimentary control codes like tabs, carriage
  returns and line feeds. 
◦	Throughout a Linux system, many files are stored in text format and there are
  many Linux tools that work with text files. Even Windows recognizes the
  importance of this format. The well-known NOTEPAD.EXE program is an editor for
  plain ASCII text files. 
`
        }
      ]
    },
    {
      id: 3,
      name: "What is the typical directory structure on a linux system?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
The file system layout on a Linux system is much like that found on other
Unix-like systems. The design is actually specified in a published standard
called the Linux Filesystem Hierarchy Standard. Not all Linux distributions
conform to the standard exactly but most come pretty close.

Directories Found On Linux Systems


/: The root directory. Where everything begins.
/bin: Contains binaries (programs) that must be present for the system to boot
      and run.
/boot: Contains the Linux kernel, initial RAM disk image (for drivers needed at
       boot time), and the boot loader.
/dev: This is a special directory which contains device nodes. “Everything is a
      file” also applies to devices. Here is where the kernel maintains a list
      of all the devices it understands.
/etc: The /etc directory contains all of the system-wide configuration files. It
      also contains a collection of shell scripts which start each of the system
      services at boot time. Everything in this directory should be readable
      text.
/home: In normal configurations, each user is given a directory in /home.
       Ordinary users can only write files in their home directories. This
       limitation protects the system from errant user activity.
/lib: Contains shared library files used by the core system programs. These are
      similar to DLLs in Windows.
/lost+found: Each formatted partition or device using a Linux file system, such
             as ext3, will have this directory. It is used in the case of a
             partial recovery from a file system corruption event. Unless
             something really bad has happened to your system, this directory
             will remain empty.
/media: On modern Linux systems the /media directory will contain the mount
        points for removable media such as USB drives, CD-ROMs, etc. that are
        mounted automatically at insertion.
/mnt: On older Linux systems, the /mnt directory contains mount points for
      removable devices that have been mounted manually.
/opt: The /opt directory is used to install “optional” software. This is mainly
      used to hold commercial software products that may be installed on your
      system.
/proc: The /proc directory is special. It's not a real file system in the sense
       of files stored on your hard drive. Rather, it is a virtual file system
       maintained by the Linux kernel. The “files” it contains are peepholes
       into the kernel itself. The files are readable and will give you a
       picture of how the kernel sees your computer.
/root: This is the home directory for the root account.
/sbin: This directory contains “system” binaries. These are programs that
       perform vital system tasks that are generally reserved for the superuser.
/tmp: The /tmp directory is intended for storage of temporary, transient files
      created by various programs. Some configurations cause this directory to
      be emptied each time the system is rebooted.
/usr: The /usr directory tree is likely the largest one on a Linux system. It
      contains all the programs and support files used by regular users.
/usr/bin: /usr/bin contains the executable programs installed by your Linux
          distribution. It is not uncommon for this directory to hold thousands
          of programs.
/usr/lib: The shared libraries for the programs in /usr/bin.
/usr/local: The /usr/local tree is where programs that are not included with
            your distribution but are intended for systemwide use are installed.
            Programs compiled from source code are normally installed in
            /usr/local/bin. On a newly installed Linux system, this tree exists,
            but it will be empty until the system administrator puts something
            in it.
/usr/sbin: Contains more system administration programs.
/usr/share: /usr/share contains all the shared data used by programs in
            /usr/bin. This includes things like default configuration files,
            icons, screen backgrounds, sound files, etc.
/usr/share/doc: Most packages installed on the system will include some kind of
                documentation. In /usr/share/doc, we will find documentation
                files organized by package.
/var: With the exception of /tmp and /home, the directories we have looked at so
      far remain relatively static, that is, their contents don't change. The
      /var directory tree is where data that is likely to change is stored.
      Various databases, spool files, user mail, etc. are located here.
/var/log: /var/log contains log files, records of various system activity. These
          are very important and should be monitored from time to time. The most
          useful ones are /var/log/messages and/or /var/log/syslog. Note that
          for security reasons on some systems, you must be the superuser to
          view log files.
`
        }
      ]
    },
    {
      id: 4,
      name: "What Exactly Are Commands?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php

◦	A command can be one of four different things: 
  1. An executable program like all those files we saw in /usr/bin. Within this
     category, programs can be compiled binaries such as programs written in C
     and C++, or programs written in scripting languages such as the shell,
     perl, python, ruby, etc. 
  2. A command built into the shell itself. bash supports a number of commands
     internally called shell builtins. The cd command, for example, is a shell
     builtin. 
  3. A shell function. These are miniature shell scripts incorporated into the
     environment. We will cover configuring the environment and writing shell
     functions in later chapters, but for now, just be aware that they exist. 
  4. An alias. Commands that we can define ourselves, built from other commands.
`
        }
      ]
    },
    {
      id: 5,
      name: "What is I/O redirection?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php

•	Standard Input, Output, And Error 
  ◦	Many of the programs that we have used so far produce output of some kind.
    This output often consists of two types. 
    1. The program's results; that is, the data the program is designed to
       produce 
    2. The status and error messages that tell us how the program is getting
       along. 
  ◦	If we look at a command like ls, we can see that it displays its results and
    its error messages on the screen. 
  ◦	Keeping with the Unix theme of “everything is a file,” programs such as ls
    actually send their 
    1. Results to a special file called standard output (often expressed as
       stdout) 
    2. Status messages to another file called standard error (stderr). 
  ◦	By default, both standard output and standard error are linked to the screen
    and not saved into a disk file. 
  ◦	In addition, many programs take input from a facility called standard input
    (stdin) which is, by default, attached to the keyboard. 
•	I/O redirection 
  ◦	I/O redirection allows us to change where output goes and where input comes
    from. Normally, output goes to the screen and input comes from the keyboard,
    but with I/O redirection, we can change that. 
`
        }
      ]
    },
    {
      id: 6,
      name: "What are pipelines?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
command1 | command2: Using the pipe operator “|” (vertical bar), the standard
                     output of one command can be piped into the standard input
                     of another

•	The Difference Between > and | 
  ◦	Pipeline operator “|”: connects the output of one command with the input of
    a second command 
  ◦	Redirection operator “>”: connects a command with a file 
    ▪	Don’t do this: command1 > command2 
      ▪	It could do something bad, like overwrite command2 with the output of
        command1 
      ▪	Example: $ cd /usr/bin; ls > less # navigates to the directory where the
                 less file is stored, then overwrites less with the output of
                 ls. 
    ▪	Bottom line: the redirection operator silently creates or overwrites
      files, so you need to treat it with a lot of respect. 
`
        }
      ]
    },
    {
      id: 7,
      name: "What are PIDs?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
How A Process Works
	•	When a system starts up, the kernel initiates a few of its own activities as
    processes and launches a program called init. init, in turn, runs a series
    of shell scripts (located in /etc) called init scripts, which start all the
    system services. Many of these services are implemented as daemon programs,
    programs that just sit in the background and do their thing without having
    any user interface. So even if we are not logged in, the system is at least
    a little busy performing routine stuff. 
	•	The fact that a program can launch other programs is expressed in the
    process scheme as a parent process producing a child process. 
	•	The kernel maintains information about each process to help keep things
    organized. For example, each process is assigned a number called a process
    ID or PID. PIDs are assigned in ascending order, with init always getting
    PID 1. The kernel also keeps track of the memory assigned to each process,
    as well as the processes' readiness to resume execution. Like files,
    processes also have owners and user IDs, effective user IDs, etc.
`
        }
      ]
    },
    {
      id: 8,
      name: "What is the environment?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
•	As we discussed earlier, the shell maintains a body of information during our
  shell session called the environment. Data stored in the environment is used
  by programs to determine facts about the system's configuration. While most
  programs use configuration files to store program settings, some programs will
  also look for values stored in the environment to adjust their behavior.
  Knowing this, we can use the environment to customize our shell experience. 
•	What Is Stored In The Environment? 
  ◦	The shell stores two basic types of data in the environment, though, with
    bash, the types are largely indistinguishable. They are environment
    variables and shell variables. Shell variables are bits of data placed there
    by bash, and environment variables are everything else. In addition to
    variables, the shell also stores some programmatic data, namely aliases and
    shell functions. 
•	Examining The Environment 
  ◦	To see what is stored in the environment, we can use either the set builtin
    in bash or the printenv program. The set command will show both the shell
    and environment variables, while printenv will only display the latter.
  ◦	It is also possible to view the contents of a variable using the echo
    command, like this: $ echo $HOME #=> /home/me 
  ◦	One element of the environment that neither set nor printenv displays is
    aliases. To see them, enter the alias command without arguments. 

•	How Is The Environment Established? 
  ◦	When we log on to the system, the bash program starts, and reads a series of
    configuration scripts called startup files, which define the default
    environment shared by all users. This is followed by more startup files in
    our home directory that define our personal environment. The exact sequence
    depends on the type of shell session being started. There are two kinds: a
    login shell session and a non-login shell session. 
    ▪	A login shell session is one in which we are prompted for our username and
      password; when we start a virtual console session, for example. 
    ▪	A non-login shell session typically occurs when we launch a terminal
      session in the GUI. 
  ◦	Login shells read one or more startup files as shown in the table below. 

Startup Files For Login Shell Sessions:

/etc/profile: A global configuration script that applies to all users.
~/.bash_profile: A user's personal startup file. Can be used to extend or
                 override settings in the global configuration script.
~/.bash_login: If ~/.bash_profile is not found, bash attempts to read this
               script.
~/.profile: If neither ~/.bash_profile nor ~/.bash_login is found, bash attempts
            to read this file. This is the default in Debian-based
            distributions, such as Ubuntu.

Startup Files For Non-Login Shell Sessions:
/etc/bash.bashrc: A global configuration script that applies to all users.
~/.bashrc: A user's personal startup file. Can be used to extend or override
           settings in the global configuration script.

◦	In addition to reading the startup files above, non-login shells also inherit
  the environment from their parent process, usually a login shell. 
◦	The ~/.bashrc file is probably the most important startup file from the
  ordinary user’s point of view, since it is almost always read. Non-login
  shells read it by default and most startup files for login shells are written
  in such a way as to read the ~/.bashrc file as well.
`
        }
      ]
    },
    {
      id: 9,
      name: "How can you modify the environment?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
◦	As a general rule, to add directories to your PATH, or define additional
  environment variables, place those changes in .bash_profile (or equivalent,
  according to your distribution. For example, Ubuntu uses .profile). 
◦	For everything else, place the changes in .bashrc. 
◦	Note: Unless you are the system administrator and need to change the defaults
  for all users of the system, restrict your modifications to the files in your
  home directory. It is certainly possible to change the files in /etc such as
  profile, and in many cases it would be sensible to do so, but for now, let's
  play it safe. 
◦	Text Editors 
  ▪	To edit (i.e., modify) the shell's startup files, as well as most of the
    other configuration files on the system, we use a program called a text
    editor. 
  ▪	A text editor is a program that is, in some ways, like a word processor in
    that it allows us to edit the words on the screen with a moving cursor. It
    differs from a word processor by only supporting pure text, and often
    contains features designed for writing programs. 
  ▪	Text editors are the central tool used by software developers to write code,
    and by system administrators to manage the configuration files that control
    the system. 
  ▪	Text editors fall into two basic categories: graphical and text based. 
    ▪	GNOME and KDE both include some popular graphical editors. GNOME ships
      with an editor called gedit, which is usually called “Text Editor” in the
      GNOME menu. KDE usually ships with three which are (in order of increasing
      complexity) kedit, kwrite, and kate. 
    ▪	There are many text-based editors. The popular ones we'll encounter are
      nano, vi, and emacs. 
      ▪	The nano editor is a simple, easy-to-use editor designed as a
        replacement for the pico editor supplied with the PINE email suite. 
      ▪	The vi editor (on most Linux systems replaced by a program named vim,
        which is short for “Vi IMproved”) is the traditional editor for
        Unix-like systems. 
      ▪	The emacs editor was originally written by Richard Stallman. It is a
        gigantic, all-purpose, does-everything programming environment. While
        readily available, it is seldom installed on most Linux systems by
        default. 
`
        }
      ]
    },
    {
      id: 10,
      name: "What is FTP?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php
▪	One of the true “classic” programs, ftp gets it name from the protocol it
  uses, the File Transfer Protocol. FTP is used widely on the Internet for file
  downloads. Most, if not all, web browsers support it and you often see URIs
  starting with the protocol ftp://. 
▪	Before there were web browsers, there was the ftp program. ftp is used to
  communicate with FTP servers, machines that contain files that can be uploaded
  and downloaded over a network. 
▪	FTP (in its original form) is not secure, because it sends account names and
  passwords in cleartext. This means that they are not encrypted and anyone
  sniffing the network can see them. Because of this, almost all FTP done over
  the Internet is done by anonymous FTP servers. An anonymous server allows
  anyone to login using the login name “anonymous” and a meaningless password. 

◦	lftp – A Better ftp 
	▪	ftp is not the only command-line FTP client. In fact, there are many. One of
    the better (and more popular) ones is lftp by Alexander Lukyanov. It works
    much like the traditional ftp program, but has many additional convenience
    features including multiple protocol support (including HTTP), automatic
    re-try on failed downloads, background processes, tab completion of path
    names, and many more. 
`
        }
      ]
    },
    {
      id: 11,
      name: "What is SSH?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php

Secure Communication With Remote Hosts
	•	For many years, Unix-like operating systems have had the ability to be
    administered remotely via a network. In the early days, before the general
    adoption of the Internet, there were a couple of popular programs used to
    log in to remote hosts. These were the rlogin and telnet programs. These
    programs, however, suffer from the same fatal flaw that the ftp program
    does; they transmit all their communications (including login names and
    passwords) in cleartext. This makes them wholly inappropriate for use in the
    Internet age. 
	•	ssh 
	  ◦	To address this problem, a new protocol called SSH (Secure Shell) was
      developed. SSH solves the two basic problems of secure communication with
      a remote host. First, it authenticates that the remote host is who it says
      it is (thus preventing so-called “man in the middle” attacks), and second,
      it encrypts all of the communications between the local and remote hosts. 
	  ◦	SSH consists of two parts. An SSH server runs on the remote host,
      listening for incoming connections on port 22, while an SSH client is used
      on the local system to communicate with the remote server. 
	  ◦	Most Linux distributions ship an implementation of SSH called OpenSSH from
      the OpenBSD project. Some distributions include both the client and the
      server packages by default (for example, Red Hat), while others (such as
      Ubuntu) only supply the client. To enable a system to receive remote
      connections, it must have the OpenSSH-server package installed, configured
      and running, and (if the system is either running or is behind a firewall)
      it must allow incoming network connections on TCP port 22. 
	  ◦	Tip: If you don’t have a remote system to connect to but want to try these
      examples, make sure the OpenSSH-server package is installed on your system
      and use localhost as the name of the remote host. That way, your machine
      will create network connections with itself. 
	  ◦	The SSH client program used to connect to remote SSH servers is called,
      appropriately enough, ssh.

•	Tunneling With SSH (launch a graphic application on a remote system) 
	◦	Part of what happens when you establish a connection with a remote host via
    SSH is that an encrypted tunnel is created between the local and remote
    systems. Normally, this tunnel is used to allow commands typed at the local
    system to be transmitted safely to the remote system, and for the results to
    be transmitted safely back. In addition to this basic function, the SSH
    protocol allows most types of network traffic to be sent through the
    encrypted tunnel, creating a sort of VPN (Virtual Private Network) between
    the local and remote systems.
	◦	Perhaps the most common use of this feature is to allow X Window system
    traffic to be transmitted. On a system running an X server (that is, a
    machine displaying a GUI), it is possible to launch and run an X client
    program (a graphical application) on a remote system and have its display
    appear on the local system.
`
        }
      ]
    },
    {
      id: 12,
      name: "What Are Shell Scripts?",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: http://linuxcommand.org/tlcl.php

What Are Shell Scripts?
	•	In the simplest terms, a shell script is a file containing a series of
    commands. The shell reads this file and carries out the commands as though
    they have been entered directly on the command line. 
	•	The shell is somewhat unique, in that it is both a powerful command line
    interface to the system and a scripting language interpreter. As we will
    see, most of the things that can be done on the command line can be done in
    scripts, and most of the things that can be done in scripts can be done on
    the command line. 


How To Write A Shell Script
	•	To successfully create and run a shell script, we need to do three things: 
	  1. Write a script. Shell scripts are ordinary text files. So we need a text
       editor to write them. 
	  2. Make the script executable. We need to set the script file’s permissions
       to allow execution.
	  3. Put the script somewhere the shell can find it. The shell automatically
       searches certain directories for executable files when no explicit
       pathname is specified. For maximum convenience, we will place our scripts
       in these directories.
`
        }
      ]
    }
  ]
};
