﻿/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
({
        tooltips: {
            search: "Rechercher",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Emplacement actuel",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Envoyer une correction",  // Command button to submit a correction to the app's host
            collect: "Ajouter du contenu à la carte",  // Command button to open a template picker to add features to the map
            filter: "Filtrer les couches de carte",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Changer de fond de carte",  // Command button to open a dialog box for switching basemaps
            share: "Partager",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Partager par courrier électronique",  // Command button to share the current map extents via email
            shareViaFacebook: "Partager via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Partager via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Imprimer la carte",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Afficher la carte imprimée",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientation de page Paysage",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientation de page Portrait",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Aide"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "Email",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "Rechercher :",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Dessiner",  // Appears before a set of tools for drawing on the map
            mapLayers: "Couches de carte :",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Champs de la couche de recherche :"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Ce site ne détient pas d\'autorisation pour obtenir l\'emplacement actuel",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Le navigateur n\'a pas pu obtenir l\'emplacement actuel",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Le navigateur n\'a pas pu obtenir l\'emplacement actuel à temps",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Cette couche de recherche n\'a pas été trouvée sur la carte",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Ce champ n\'a pas été trouvé dans la couche de recherche de la carte"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
