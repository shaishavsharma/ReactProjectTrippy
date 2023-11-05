import "./TripStyles.css";
import TripData from "./TripData";

function Trip(){
    return(
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
        image={"https://images.unsplash.com/photo-1469967700385-5b0140e16e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
        heading="Trip in Indonesia"
        text="Indonesia, Officially the Republic of Indonesia, is a Country in Southeast Asia and Oceania between the India and Pacific oceans.It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />

<TripData
        image={"https://images.unsplash.com/photo-1508062878650-88b52897f298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"}
        heading="Trip in Malaysia"
        text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />

<TripData
        image={"https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"}
        heading="Trip in France"
        text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
      </div>
    </div>
    );
}

export default Trip;