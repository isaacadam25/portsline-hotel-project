import { useRouter } from 'next/router';
import Image from 'next/image';
import { Col, Row, Container, Card } from 'react-bootstrap';
import Banner from '../../components/Banner';
import Layout from '../../components/Layout';
import RoomCard from '../../components/RoomCard';
import SpaceDiv from '../../components/SpaceDiv';
import FeaturedRooms from '../../components/FeaturedRooms';
import Room from '../../public/images/room1.jpg';

export default function RoomDetail({ caution }) {
  const router = useRouter();
  const roomId = router.query.roomId;
  return (
    <Layout title="Rooms">
      <Banner title={`Room ${roomId}`} />
      <Container>
        <Row className="justify-content-center">
          <Col md={12} xs={12}>
            <h1 className="room-header">Room Details - {roomId}</h1>
            <Image
              className="room-image"
              src={Room}
              alt="Room-Image"
              width={372}
              height={200}
            />
            <Image
              className="room-image"
              src={Room}
              alt="Room-Image"
              width={372}
              height={200}
            />
            <Image
              className="room-image"
              src={Room}
              alt="Room-Image"
              width={372}
              height={200}
            />
          </Col>
          <Col md={12} xs={12}>
            <Card className="room-service-card">
              <Card.Body>
                <div className="room-service">
                  <ul>
                    <li>
                      <i className="fa fa-bed" />
                      Single Bed
                    </li>
                    <li>
                      <i className="fa fa-snowflake-o" />
                      Air Conditioned
                    </li>
                    <li>
                      <i className="fa fa-bed" />
                      Desk
                    </li>
                    <li>
                      <i className="fa fa-wifi" />
                      Wireless Internet
                    </li>
                    <li>
                      <i className="fa fa-television" />
                      Television
                    </li>
                    <li>
                      <i className="fa fa-bed" />
                      Mini Fridge
                    </li>
                    <li>
                      <i className="fa fa-bed" />
                      Desk
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
            <Card className="room-service-card">
              <Card.Body>
                <div className="service-description">
                  <p style={{ textAlign: 'justify' }}>
                    This room is located on the top floor of the hotel and has
                    hot / cold air conditioned, a furnished balcony with sun
                    loungers with swimming pool or mountain views and free WI
                    FI.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <b>Room surface area:</b> 17 m²
                  </p>
                  <p>
                    <b>Bed options:</b> 1 single bed (105 cm * 190 cm)
                  </p>
                  <p>
                    <b>Room facilities:</b> Pool or mountain views, terrace,
                    telephone, flat screen TV with satellite channels, free
                    safe, hot/cold air conditioned, desk, parquet floor,
                    wardrobe, mini fridge , hairdryer, free toiletries, gel /
                    shampoo dispenser and bathtub.
                  </p>
                  <p>
                    <i>{caution ? caution : 'Non smoking room'}.</i>
                  </p>
                  <button>Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FeaturedRooms />
      <SpaceDiv />
    </Layout>
  );
}
