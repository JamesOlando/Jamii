import { useChatStore } from "../store/useChatStore";

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser, isUSersLoading}=useChatStore();

    const onlineUsers = [];

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if (isUSersLoading) return <SidebarSkeleton />

    return <div>Sidebar</div>;
};
export default Sidebar;