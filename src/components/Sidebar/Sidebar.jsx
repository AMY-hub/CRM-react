import { SidebarFilter } from './SidebarFilter';
import { Title } from './Title';
import { UserInfo } from './UserInfo';

export const Sidebar = ({ newBids }) => {
    return (
        <div className="left-panel blue-skin">
            <Title />
            <UserInfo />
            <SidebarFilter newBids={newBids} />
        </div>
    )
}
