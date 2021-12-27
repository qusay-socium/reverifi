import demoAgentImg from 'assets/images/demo-agent.webp';

const agentsData = [
  {
    address: 'Spain',
    agentImg: demoAgentImg,
    agentName: 'John Doe',
    companyName: 'Company Name',
    email: 'john.doe@gmail.com',
    id: 0,
    phoneNumber: '222-222-222',
  },
  {
    address: 'USA',
    agentImg: demoAgentImg,
    agentName: 'Sarah M',
    companyName: 'Company Name',
    email: 'john.doe@gmail.com',
    id: 3,
    phoneNumber: '222-222-222',
  },
  {
    address: 'USA',
    agentImg: demoAgentImg,
    agentName: 'kim Smith',
    companyName: 'Company Name',
    email: 'john.doe@gmail.com',
    id: 1,
    phoneNumber: '222-222-222',
  },
  {
    address: 'USA',
    agentImg: demoAgentImg,
    agentName: 'Lory Mac',
    companyName: 'Company Name',
    email: 'john.doe@gmail.com',
    id: 4,
    phoneNumber: '222-222-222',
  },
  {
    address: 'Italy',
    agentImg: demoAgentImg,
    agentName: 'Jina Johnson',
    companyName: 'Company Name',
    email: 'john.doe@gmail.com',
    id: 2,
    phoneNumber: '222-222-222',
  },
  {
    address: 'UK',
    agentImg: demoAgentImg,
    agentName: 'Kyle Moe',
    companyName: 'Company Name',
    email: 'john.doe@gmail.com',
    id: 5,
    phoneNumber: '222-222-222',
  },
];

/**
 * Service that gets all agents.
 *
 * @return {Object[]} Array of agents.
 */
const getAgents = () => agentsData;

export default getAgents;
