import React from "react";

import AppHeader from "../app-header";
import SerchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SerchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App;