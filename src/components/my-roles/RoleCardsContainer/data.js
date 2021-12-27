import { ReactComponent as agent } from 'assets/icons/agent.svg';
import { ReactComponent as attorney } from 'assets/icons/attorney.svg';
import { ReactComponent as buyer } from 'assets/icons/buyer.svg';
import { ReactComponent as homeInspector } from 'assets/icons/home-inspector.svg';
import { ReactComponent as insuranceProvider } from 'assets/icons/insurance-provider.svg';
import { ReactComponent as lender } from 'assets/icons/lender.svg';
import { ReactComponent as reverifiPlus } from 'assets/icons/reverifi+.svg';
import { ReactComponent as seller } from 'assets/icons/seller.svg';
import { ReactComponent as transactionCoordinator } from 'assets/icons/transaction-coordinator.svg';
import { Icon } from 'components/my-roles/RoleCard/role-card.styles';

const rolesData = [
  {
    Icon: Icon(seller),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Seller',
  },
  {
    Icon: Icon(buyer),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Buyer',
  },
  {
    Icon: Icon(homeInspector),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Home Inspector',
  },
  {
    Icon: Icon(lender),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Lender',
  },
  {
    Icon: Icon(attorney),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Attorney',
  },
  {
    Icon: Icon(agent),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Agent',
  },
  {
    Icon: Icon(insuranceProvider),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Insurance Provider',
  },
  {
    Icon: Icon(transactionCoordinator),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Transaction Coordinator',
  },
  {
    Icon: Icon(reverifiPlus),
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'reverifi+',
  },
];

/**
 * Service that gets all roles.
 *
 * @return {Object[]} Array of roles.
 */
const getRoles = () => rolesData;

export default getRoles;
