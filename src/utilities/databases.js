export default {
  name: "Databases",
  data: [
    {
      id: 0,
      name: "ORM",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Object-relational_mapping

Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science
is a programming technique for converting data between incompatible type systems
using object-oriented programming languages. This creates, in effect, a "virtual
object database" that can be used from within the programming language.
`
        }
      ]
    },
    {
      id: 1,
      name: "SQL Definition",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://launchschool.com/books/sql/read
SQL (Structured Query Language): the programming language used to communicate
                                 with a relational database. (E.F. Codd, 70s)

SQL is a little different to other programming languages you may have
encountered. SQL is a declarative language; when you write an SQL statement
you describe what needs to be done, but not exactly how to do it -- the exact
details of how the query is executed are handled internally by the RDBMS you
are using.
`
        }
      ]
    },
    {
      id: 2,
      name: "RDBMS",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://launchschool.com/books/sql/read
RDBMS: Relational Database Management System. A software application for
       managing relational databases, such as PostgreSQL.

A relational database management system, or RDBMS, is essentially a software
application, or system, for managing relational databases. An RDBMS allows a
user, or another application, to interact with a database by issuing commands
using syntax that conforms to a certain set of conventions or standards.
`
        }
      ]
    },
    {
      id: 3,
      name: "Relational vs Non Relational Databases",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://stackoverflow.com/questions/4811744/what-is-the-difference-between-a-relational-and-non-relational-database

RDBMS Examples: MySQL, PostgreSQL and MS SQL Server
Non-RDBMS Examples: NoSQL, MongoDB

Relational databases have a mathematical basis (set theory, relational theory),
which are distilled into SQL == Structured Query Language.

NoSQL's many forms (e.g. document-based, graph-based, object-based, key-value
store, etc.) may or may not be based on a single underpinning mathematical
theory. As S. Lott has correctly pointed out, hierarchical data stores do indeed
have a mathematical basis. The same might be said for graph databases.

I'm not aware of a universal query language for NoSQL databases.
`
        }
      ]
    },
    {
      id: 4,
      name: "SQL Sub-languages",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://launchschool.com/books/sql/read
SQL Sub-languages
SQL can be thought of as comprising of three separate sub-languages, each
concerned with a specific aspect of manipulating or interacting with a database.
The three sub-languages are:
1. DDL: Data Definition Language. Used to define the structure of a database and
        the tables and columns within it.
2. DML: Data Manipulation Language. Used to retrieve or modify data stored in a
        database. SELECT queries are part of DML.
3. DCL: Data Control Language. Used to determine what various users are allowed
        to do when interacting with a datbase.

Note: Although database schema is largely a DDL concern, parts of it, such as
      access and permissions, are determined by DCL
`
        }
      ]
    },
    {
      id: 5,
      name: "DB Normalization",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.webopedia.com/TERM/N/normalization.html

In relational database design, the process of organizing data to minimize
redundancy. Normalization usually involves dividing a database into two or more
tables and defining relationships between the tables. The objective is to
isolate data so that additions, deletions, and modifications of a field can be
made in just one table and then propagated through the rest of the database via
the defined relationships.
`
        }
      ]
    },
    {
      id: 6,
      name: "SQL vs NoSQL",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://www.geeksforgeeks.org/difference-between-sql-and-nosql/

Difference between SQL and NoSQL

1. Type – 
      SQL databases are primarily called as Relational Databases (RDBMS)

      NoSQL database are primarily called as non-relational or distributed
      database.
2. Language – SQL databases defines and manipulates data based structured query
   language (SQL). Seeing from a side this language is extremely powerful. SQL
   is one of the most versatile and widely-used options available which makes it
   a safe choice especially for great complex queries. But from other side it
   can be restrictive. SQL requires you to use predefined schemas to determine
   the structure of your data before you work with it. Also all of your data
   must follow the same structure. This can require significant up-front
   preparation which means that a change in the structure would be both
   difficult and disruptive to your whole system.   A NoSQL database has dynamic
   schema for unstructured data. Data is stored in many ways which means it can
   be document-oriented, column-oriented, graph-based or organized as a KeyValue
   store. This flexibility means that documents can be created without having
   defined structure first. Also each document can have its own unique
   structure. The syntax varies from database to database, and you can add
   fields as you go.
3. The Scalability – In almost all situations SQL databases are vertically
   scalable. This means that you can increase the load on a single server by
   increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases
   are horizontally scalable. This means that you handle more traffic by
   sharding, or adding more servers in your NoSQL database. It is similar to
   adding more floors to the same building versus adding more buildings to the
   neighborhood. Thus NoSQL can ultimately become larger and more powerful,
   making these databases the preferred choice for large or ever-changing data
   sets.
4. The Structure – SQL databases are table-based on the other hand NoSQL
   databases are either key-value pairs, document-based, graph databases or
   wide-column stores. This makes relational SQL databases a better option for
   applications that require multi-row transactions such as an accounting system
   or for legacy systems that were built for a relational structure.
5. Property followed – SQL databases follow ACID properties (Atomicity,
   Consistency, Isolation and Durability) whereas the NoSQL database follows the
   Brewers CAP theorem (Consistency, Availability and Partition tolerance).
6. Support – Great support is available for all SQL database from their vendors.
   Also a lot of independent consultations are there who can help you with SQL
   database for a very large scale deployments but for some NoSQL database you
   still have to rely on community support and only limited outside experts are
   available for setting up and deploying your large scale NoSQL deployments.  
   Some examples of SQL databases include PostgreSQL, MySQL, Oracle and
   Microsoft SQL Server. NoSQL database examples include Redis, RavenDB
   Cassandra, MongoDB, BigTable, HBase, Neo4j and CouchDB.
`
        }
      ]
    },
    {
      id: 7,
      name: "DB Index",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Database_index

A database index is a data structure that improves the speed of data retrieval
operations on a database table at the cost of additional writes and storage
space to maintain the index data structure. Indexes are used to quickly locate
data without having to search every row in a database table every time a
database table is accessed. Indexes can be created using one or more columns of
a database table, providing the basis for both rapid random lookups and
efficient access of ordered records.

An index is a copy of selected columns of data from a table that can be searched
very efficiently that also includes a low-level disk block address or direct
link to the complete row of data it was copied from. Some databases extend the
power of indexing by letting developers create indexes on functions or
expressions. For example, an index could be created on upper(last_name), which
would only store the upper-case versions of the last_name field in the index.
Another option sometimes supported is the use of partial indices, where index
entries are created only for those records that satisfy some conditional
expression. A further aspect of flexibility is to permit indexing on
user-defined functions, as well as expressions formed from an assortment of
built-in functions.
`
        }
      ]
    },
    {
      id: 8,
      name: "Foreign Key vs Primary Key",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://launchschool.com/books/sql/read

Primary Keys: A Primary Key is a unique identifier for a row of data.

Foreign Keys:
Foreign Keys allow us to associate a row in one table to a row in another table.
This is done by setting a column in one table as a Foreign Key and having that
column reference another table's Primary Key column.
`
        }
      ]
    },
    {
      id: 9,
      name: "Three Entity Relationship Types",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://launchschool.com/books/sql/read

Entities:
An entity represents a real world object, or a set of data that we want to model
within our database; we can often identify these as the major nouns of the
system we're modeling. For the purposes of this book we're going to try and keep
things simple and draw a direct correlation between a entity and a single table
of data; in a real database however, the data for a single entity might be
stored in more than one table.

Relationships:
Entity Relationship Diagram (ERD): a graphical representation of entities and
                                   their relationships to each other, and is a
                                   commonly used tool within database design.

Entity Relationship Types:
1. One-to-One: A User has ONE address
2. One-to-Many: A Book has MANY reviews
3. Many-to-Many: A user has MANY books and a book has MANY users


One-to-One:
A one-to-one relationship between two entities exists when a particular entity
instance exists in one table, and it can have only one associated entity
instance in another table.

Example: A user can have only one address, and an address belongs to only one
         user.

Implementation: the id that is the PRIMARY KEY of the users table is used as
                both the FOREIGN KEY and PRIMARY KEY of the addresses table.

One-to-Many:
A one-to-many relationship exists between two entities if an entity instance in
one of the tables can be associated with multiple records (entity instances) in
the other table. The opposite relationship does not exist; that is, each entity
instance in the second table can only be associated with one entity instance in
the first table.

Example: A book has many reviews. A review belongs to only one book.

Many-to-Many
A many-to-many relationship exists between two entities if for one entity
instance there may be multiple records in the other table, and vice versa.

In order to implement this sort of relationship we need to introduce a third,
cross-reference, table. This table holds the relationship between the two
entities, by having two FOREIGN KEYs, each of which references the PRIMARY KEY
of one of the tables for which we want to create this relationship.

Example: A user can check out many books. A book can be checked out by many
            users (over time).
`
        }
      ]
    },
    {
      id: 10,
      name: "Types of Joins in SQL",
      language: "js",
      tabs: [
        {
          name: "Question",
          data:
`Source: https://en.wikipedia.org/wiki/Join_(SQL)

A JOIN is a means for combining columns from one (self-join) or more tables by
using values common to each.

ANSI-standard SQL specifies five types of JOIN: INNER, LEFT OUTER, RIGHT OUTER,
FULL OUTER and CROSS. As a special case, a table (base table, view, or joined
table) can JOIN to itself in a self-join.
`
        }
      ]
    }
  ]
};
