import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelper";
import { Container, Visibility, Menu, Image } from 'semantic-ui-react';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };

    stickTopMenu = () => this.setState({ menuFixed: true });
    unStickTopMenu = () => this.setState({ menuFixed: null });

    render() {
        const { menuFixed } = this.state;

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                            </Menu.Item>
                            <Menu.Item header as={NavLink} to="/" exact>Movieapp</Menu.Item>
                            <Menu.Item as={NavLink} to="/movies" exact>Movies</Menu.Item>
                            <Menu.Item as={NavLink} to="/addMovie" exact>Add New Movie</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}

export default Header;