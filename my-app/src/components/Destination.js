import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination=()=>{
    return(
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time</p>
        
        <DestinationData
        className="first-des"
        heading="Taal Volcano,Batangas"
        text="One of the most iconic views in Luson, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1={"https://images.unsplash.com/photo-1671772555442-cc9813ce8c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"}
        img2={"https://images.unsplash.com/photo-1523149534614-e6ddb2d48f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
        />
        
        <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul,Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Bantangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and through the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing, well-deserved swim."
        img1={"https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"}
        img2={"https://images.unsplash.com/photo-1533358122925-6eb2658855bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
        />
    </div>
    
    );
}

export default Destination;