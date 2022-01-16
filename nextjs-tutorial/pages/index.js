import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
// our-domain.com/

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// good for caching
// here is faster better than serverside
// during the build process
// this is so important to get the data before calling the HomePage function
export async function getStaticProps() {
  //fetch data from an api or database
  const client = await MongoClient.connect(
    "mongodb+srv://david-wagih:Davidwagih123@cluster0.5gxme.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(), // because it was a complex object
      })),
    },
    revalidate: 1, // this is some time for next js
  };
}
export default HomePage;

// here is better when you want to access the request object
// or data that changes very fast every second maybe and revalidate even can't help you
// will not run on the build but always on the server after deployment
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
// fetch data from database or an Api
// this code only runs on the server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
