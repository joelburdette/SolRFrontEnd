// index.js
import React from "react";
import ReactDOM from "react-dom";
import {
    SolrFacetedSearch,
    SolrClient
} from "solr-faceted-search-react";

// The search fields and filterable facets you want
const fields = [
    {label: "All text fields", field: "*", type: "text"},
    {label: "Name", field: "name_t", type: "text"},
    {label: "Characteristics", field: "to_s", type: "list-facet"},
    {label: "Blah", field: "sender_name_s", type: "list-facet"},
    {label: "Date of birth", field: "sent_on_dt", type: "range-facet"},
    {label: "Date of death", field: "deathDate_i", type: "range-facet"}
];

// The sortable fields you want
const sortFields = [
    {label: "Name", field: "koppelnaam_s"},
    {label: "Date of birth", field: "birthDate_i"},
    {label: "Date of death", field: "deathDate_i"}
];

document.addEventListener("DOMContentLoaded", () => {
    // The client class
    new SolrClient({
        // The solr index url to be queried by the client
        url: "https://cs-lab.letu.edu:50005/solr/mail_core/select",
        searchFields: fields,
        sortFields: sortFields,

        // The change handler passes the current query- and result state for render
        // as well as the default handlers for interaction with the search component
        onChange: (state, handlers) =>
            // Render the faceted search component
            ReactDOM.render(
                <SolrFacetedSearch
                    {...state}
                    {...handlers}
                    bootstrapCss={true}
                    onSelectDoc={(doc) => console.log(doc)}
                />,
                document.getElementById("app")
            )
    }).initialize(); // this will send an initial search, fetching all results from solr
});
