import { ImSpinner } from 'react-icons/im';
export default function Loader() {
    return (
        <div>
            <ImSpinner size="32" className="icon-spin" />
            <h2>loading...</h2>
        </div>
    );
};