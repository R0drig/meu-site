import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:w-3/4 md:w-3/5 lg:w-2/5 xl:w-2/3 mx-auto ">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4"> 
        <Image
          src="/foto-perfil.jpeg"
          alt="Sua Foto"
          width={400}
          height={400}
        />
      </div>
      <h1 className="text-2xl font-bold my-2">Rodrigo Reis</h1>
      <p className="text-lg font-semibold">Software Developer</p>
       <div className="flex mt-4">
        <a href="https://www.linkedin.com/in/rdosreispaulino/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/linkedin.png" // Certifique-se de que o nome do arquivo corresponde ao que você colocou na pasta "public"
            alt="LinkedIn"
            width={30}
            height={30}
            className="mr-4"
          />
      </a>
       <a href="https://github.com/R0drig" target="_blank" rel="noopener noreferrer">
          <Image
            src="/github.png" // Certifique-se de que o nome do arquivo corresponde ao que você colocou na pasta "public"
            alt="GitHub"
            width={30}
            height={30}
          />
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="text-base text-gray-600">
          Apaixonado por tecnologia, buscando constantemente aprimorar minhas habilidades em desenvolvimento de software e análise de dados.
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-base">
          Minha jornada profissional está em seus estágios iniciais, mas estou empenhado em adquirir experiência valiosa. Tenho focado em diversas linguagens de programação e em conceitos essenciais do desenvolvimento de software, além de aplicar metodologias ágeis em meus projetos.
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-base">
          Tenho um grande interesse em dados, acredito que eles são a chave para revelar insights poderosos. Estou determinado a aprimorar minhas habilidades em análise de dados, aprendizado de máquina e visualização para contribuir significativamente em projetos futuros.
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-base">
          Este site é meu espaço pessoal onde compartilho minha jornada de estudo e descoberta no mundo do desenvolvimento de software e análise de dados. Espero conectar-me com outros entusiastas e profissionais, trocar ideias e buscar oportunidades de crescimento conjunto.
        </p>
        <p className="mt-4">
          Agradeço por visitar o meu site e estou ansioso para continuar aprendendo e crescendo nesta empolgante jornada tecnológica!
        </p>
      </div>
    </div>
  );
};

export default Profile;
