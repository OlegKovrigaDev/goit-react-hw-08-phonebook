import {
  ReadOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { Container } from './Container.styled';

const Home = () => (
  <div>
    <Container>
      <h1>Home page of the Phonebook</h1>
      <div>
        <TeamOutlined style={{ fontSize: 56 }} />
        <UsergroupAddOutlined style={{ fontSize: 56 }} />
        <UsergroupDeleteOutlined style={{ fontSize: 56 }} />
        <ReadOutlined style={{ fontSize: 56 }} />
      </div>
    </Container>
  </div>
);

export default Home;
