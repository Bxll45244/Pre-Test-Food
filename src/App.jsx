import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
 const filterItems = (category)=>{
  if(category==="All"){
    setMenuItems(data)
  }else{
    const newItems = data.filter(
      (item)=>item.category===category
    );
    setMenuItems(newItems)
  }
 }
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Grab Restaurant</h2>
            <input type="text" placeholder="Search.."></input>
          </div>
        </section>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </main>
    </>
  );
}

export default App;
