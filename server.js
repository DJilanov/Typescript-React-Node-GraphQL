const { ApolloServer, gql } = require("apollo-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const uid = require("nanoid");
const adapter = new FileSync("contacts.json");
const db = low(adapter);

db.defaults({
  contacts: []
}).write();

const server = new ApolloServer({
  resolvers: {
    Query: {
      contacts() {
        return db.get("contacts").value();
      },
      contact(_, { id }) {
        return db
          .get("contacts")
          .find({ id })
          .value();
      }
    },
    Mutation: {
      async addContact(_, { contact }) {
        let newContact = { ...contact, id: uid() };
        await db
          .get("")
          .push(newContact)
          .write();
        return newContact;
      },
      async deleteContact(_, { id }) {
        await db
          .get("contacts")
          .remove({ id })
          .write();
        return true;
      },
      async updateContact(_, { contact }) {
        await db
          .get("contacts")
          .find({ id: contact.id })
          .assign({ ...contact })
          .write();

        return db
          .get("contacts")
          .find({ id: contact.id })
          .value();
      }
    }
  },
  typeDefs: `
    type Contact {
      id: ID
      name: String
      email: String
    }

    input InputContact {
      id: ID
      name: String
      email: String
    }

    type Query {
      contacts: [Contact]
      contact(id: ID): Contact
    }

    type Mutation {
      addContact(contact: InputContact): Contact
      deleteContact(id: ID): Boolean
      updateContact(contact: InputContact): Contact
    }
  `,
  introspection: true, // enables introspection of the schema
  playground: true, // enables the actual playground
});

server.listen(3001).then(() => {
  console.log("running @ http://localhost:3001");
});
