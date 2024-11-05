import { BotaoEstilizado } from "./style";
import React from "react";

export function Botao({onClick, children}){
    return(
        <>
        
        <BotaoEstilizado onClick={onClick}>{children}</BotaoEstilizado>
        
        </>
    );
}