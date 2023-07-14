import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";

const AboutPage = () => {
    useTitle("About")
    return (
        <div className="max-w-screen-xl mx-auto mb-20">
            <p className="text-lg font-medium px-14 mt-20">
           <span className="text-blue-500 underline"><Link to='https://www.egnyte.com/guides/governance/user-management#:~:text=User%20management%20is%20a%20system,Providing%20users%20with%20authenticated%20access'> A user management system</Link></span> is a software application or platform that allows organizations to manage and maintain user accounts and their associated information within a system or application. It provides a centralized and efficient way to handle user registration, authentication, authorization, and other related tasks.
            </p>
            <p className="text-lg font-medium px-14 my-5">
            Here is a breakdown of the key components and features typically found in a user management system:
            </p>
            <p className="text-lg font-medium px-14 my-5"><span className="font-bold">User Registration:</span>The system enables users to create new accounts by providing necessary information such as username, email address, and password. It may also include additional fields like name, contact details, and profile pictures.</p>
            <p className="text-lg font-medium px-14 my-5"><span className="font-bold">User Authentication:</span> Once registered, users need to authenticate themselves to access the system or application. This can be done through various methods such as username/password login, social media logins (e.g., using Google or Facebook credentials), or multi-factor authentication (MFA) for enhanced security.</p>
            <p className="text-lg font-medium px-14 my-5"><span className="font-bold">User Profile Management:</span> The system allows users to manage their profile information, including updating personal details, changing passwords, and managing privacy settings. It may also offer features like profile pictures, biographical information, and preferences customization.</p>
            <p className="text-lg font-medium px-14 my-5"><span className="font-bold">User Roles and Permissions:</span> User management systems often provide a role-based access control (RBAC) mechanism. Administrators can assign different roles to users, granting them specific permissions and access levels based on their responsibilities or organizational hierarchy. This helps enforce security and control user privileges within the system.</p>
        </div>
    );
};

export default AboutPage;