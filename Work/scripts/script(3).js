.mapborder {
    background: #fff;
    padding: 10px;
    width: 100%;
    height: 100%;
}

iframe {
    position: relative;
    width: 100%; /**--height:665px;*/
}
/* Always set the map height explicitly to define the size of the div
* element that contains the map. */
#map {
    height: 100%;
}
/* Optional: Makes the sample page fill the window. */
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.controls {
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

#pac-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 300px;
}

    #pac-input:focus {
        border-color: #4d90fe;
    }

.pac-container {
    font-family: Roboto;
}

#type-selector {
    color: #fff;
    background-color: #4d90fe;
    padding: 5px 11px 0px 11px;
}

    #type-selector label {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 300;
    }

#target {
    width: 345px;
}

.AA_accord_head {
    background-color: #8C9197 !important;
    border: 1px solid #bbb;
    padding: 8px 15px;
    /* margin-bottom: 5px; */
    color: #fff;
}

.AA_accord_content {
    height: auto;
    overflow: auto;
    display: block;
    font-size: 13px;
    padding: 5px 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0 0 15px 0;
}


    
/*MODAL DIALOG CSS*/
    .modal 
    {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 10000000000; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: hidden; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content 
    {
      background-color: #fefefe;
      margin: 5% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    .close 
    {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus 
    {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }