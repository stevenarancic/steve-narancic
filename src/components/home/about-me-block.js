import React from "react";
import { useMediaQuery } from "react-responsive";

export default function AboutMeBlock() {
    const isMobile = useMediaQuery({
        query: "(max-width: 900px)",
    });
    return (
        <div
            style={
                isMobile
                    ? { marginTop: 22, textAlign: "start" }
                    : { textAlign: "start" }
            }
        >
            <h2>Sobre mim</h2>
            <p style={{ textAlign: "justify" }}>
                Desenvolvedor de sistemas com 3 anos de experiência. Comecei
                fazendo curso técnico, onde desenvolvi conhecimentos diversos
                sobre a área. Trabalho atualmente de carteira assinada em
                desenvolvimento e manutenção de sistemas Web e Mobile.
                <br />
                Sempre estudando, aprendi do melhor jeito a desenvolver soluções
                que facilitem a vida do cliente com rapidez e atendimento de
                qualidade. Caso queira ver alguns dos projetos que foram feitos
                inteiramente por mim, confira o meu Github, tenho vários
                projetos interessantes lá.
            </p>
        </div>
    );
}
