import { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
    $(reset);
    body{
        font-family: sans-serif;
        background-color: #ecf0f1;

    }
    a{
        color:inherit;
    }
    main{
        width:80%;
        margin: 0 auto;
        padding: 20px;
    }
`