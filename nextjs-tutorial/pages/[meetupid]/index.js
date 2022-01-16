import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg"
      title="First Meetup"
      address="Cairo, Egypt"
      description="this is an awesome meetup!"
    />
  );
}

export async function getStaticPaths(){
  return {

    fallback: "blocking", // false means that i have provided all the supported paths
    // this also can be fetched by an Api or database
    paths: [
      {params: {meetupId: 'm1'}},
      {params: {meetupId: 'm2'}},
    ]
  }
}



export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData : {
        image="https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg",
        id : "m1",
        title="First Meetup",
        address="Cairo, Egypt",
        description="this is an awesome meetup!"
      }
    }
  }
}

export default MeetupDetails;
