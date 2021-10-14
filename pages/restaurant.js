import Banner from "../components/Banner";
import Layout from "../components/Layout";
import MenuCard from "../components/MenuCard";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import chicken from "../public/images/grilled.jpg";
import beef from "../public/images/roast-beef.jpg";
import mshkaki from "../public/images/mishkaki.jpg";
import SpaceDiv from "../components/SpaceDiv";

export default function Restaurant() {
  const menus = [];
  const answers = [1, 2, 3, 4];

  for (let i = 1; i < 7; i++) {
    menus.push(
      <MenuCard
        title="Menu"
        subTitle="Awesome Food"
        description="Check out our new menu with the 
            special dessert ,free delivery 
            is now available."
        pic={answers.includes(i / 2) ? mshkaki : beef}
      />
    );
  }

  return (
    <Layout title="Restaurant">
      <Banner title="Restaurant" />

      {/* Menu Contents Start */}
      <Row
        className="contents-parent"
        style={{ width: "100%", backgroundColor: "", margin: 0 }}
      >
        <Row
          style={{
            backgroundColor: "",
            height: "50vh",
            margin: "0 0 5% 0",
            padding: 0,
          }}
        >
          <div className="restaurant-first-row">
            <Row style={{ width: "100%", margin: 0, padding: 0 }}>
              <Card style={{ padding: "2%" }}>
                <Card.Title>FOOD AND MEALS</Card.Title>
                <Card.Text>
                  Ports Line Hotel & Spa gives attention in choice of genuine,
                  local as well as international ingredients, culinary abilities
                  of our chefs, exemplary service and cozy restaurant ambience
                  that will delight your appetite.
                </Card.Text>
              </Card>
            </Row>
          </div>
        </Row>

        <Row
          style={{
            width: "100%",
            backgroundColor: "",
            margin: 0,
            padding: 0,
          }}
        >
          {menus}
        </Row>

        <Row
          style={{
            backgroundColor: "lightgray",
            padding: "5% 10%",
            borderRadius: "30px",
            margin: 0,
          }}
        >
          <Col>
            <Card style={{ backgroundColor: "inherit", border: "none" }}>
              <Card.Title style={{ marginBottom: "3%" }}>
                Book a Table
              </Card.Title>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Date </Form.Label>
                      <Form.Control type="date" placeholder="select date" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Comments</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        style={{ height: "36vh" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Button
                    variant=""
                    type="submit"
                    style={{ backgroundColor: "blue" }}
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Row>
      {/* Menu Contents End */}

      <SpaceDiv />
    </Layout>
  );
}
