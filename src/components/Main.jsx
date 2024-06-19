import React, { useState } from 'react';

import TodoInput from "./Todo/TodoInput.jsx";
import TodoList from "./Todo/TodoList.jsx";
import CategoriesInput from "./Categories/CategoriesInput.jsx";
import CategoriesList from "./Categories/CategoriesList.jsx";
import {Container, Tab, Tabs} from "react-bootstrap";

const TODOS = 'Завдання';
const CATEGORIES = 'Категорії';

const Main = () => {
    const [activeTab, setActiveTab] = useState('todos');

    return (
        <Container>
            <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-3"
            >
                <Tab eventKey="todos" title={TODOS}>
                    <div>
                        <TodoInput />
                    </div>
                    <div>
                        <TodoList />
                    </div>
                </Tab>
                <Tab eventKey="categories" title={CATEGORIES}>
                    <div>
                        <CategoriesInput />
                    </div>
                    <div>
                        <CategoriesList />
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Main;
