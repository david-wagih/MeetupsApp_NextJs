import MeetupList from "../components/meetups/MeetupList";
// our-domain.com/

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg",
    address: "Cairo, Egypt",
    description: "this is a first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://thumbs.dreamstime.com/b/london-big-ben-houses-parliament-uk-49652572.jpg",
    address: "London, England",
    description: "this is a Second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

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

// good for caching
// here is faster better than serverside
// during the build process
// this is so important to get the data before calling the HomePage function
export async function getStaticProps() {
  //fetch data from an api or database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1, // this is some time for next js
  };
}
export default HomePage;
