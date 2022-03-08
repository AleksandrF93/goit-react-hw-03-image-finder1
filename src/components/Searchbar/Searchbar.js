import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
 import s from './Searchbar.module.css'
export default class Searchbar extends Component {
    state = {
        imageName: '',
    };

    static propTypes = {
        webformatURL: PropTypes.func
    };

    handleImageChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
           return toast.error("Введите название картинки!");
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.Form} onSubmit={this.handleSubmit}>
                    <button type="Submit" className={s.Button}>
                        <span className="button-label"></span>
                        <FaSearch size="1.5em" fill="#aaa" />
                    </button>

                    <input
                        className={s.Input}
                        type="text"
                        name="imageName"
                        value={this.state.imageName}
                        onChange={this.handleImageChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
};