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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
