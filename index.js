// index.js
import React from "react";
import ReactDOM from "react-dom";
import {
    SolrFacetedSearch,
    SolrClient
} from "solr-faceted-search-react";
// The search fields and filterable facets you want
const fields = [
    {label: "General Search", 		field: "*", type: "text"},
    //{label: "Advanced Entry (field:value,...)", field: "*", type: "currentQuery"},
    {label: "Sender Email Address", 	field: "sender_email_address_s", type: "text"},
    {label: "Sender Name", 	field: "sender_name_s", type: "list-facet"},
    {label: "Subject", 			field: "subject_s", 	type: "text"},
    //NEED TO ESCAPE SLASHES HERE
  //    \\\\Public\ Folders\\*
    {label: "Path", 			field: "path_s", 	type: "text"},
    {label: "Sent on", 	field: "sent_on_dt", 	type: "date-range-facet"},
];

// The sortable fields you want
const sortFields = [
    {label: "Sender Email", field: "sender_email_address_s"},
    {label: "Sent on", field: "sent_on_dt"},
    {label: "Path", field: "path_s"}
];


var lightbox_launch = function(doc) {
  //Do whatever
  console.log(doc);
};

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
                    onSelectDoc={hiJoel}

                />,
                document.getElementById("app")
            )
    }).initialize(); // this will send an initial search, fetching all results from solr
});
