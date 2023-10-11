import React from 'react';
import "./stylead.css";
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div className="container">
         <header>
      <a>Kafitness</a>
    </header>
      <strong className="tituloCentrado">Acerca de Kafitnes</strong>
      <div className="reseñaEmpresa">
        <p>Kafitness es un pequeño centro de acondicionamiento físico ubicado en Santa Lucía de Laurel.</p>
      </div>
      <div className="terminosCondiciones">
        { <><h2>Términos y condiciones de Kafitness</h2><p>
          Estos términos y condiciones de uso (en adelante, los "Términos y Condiciones") regulan el uso del sitio web de Kafitness (en adelante, el "Sitio Web"). El Sitio Web es propiedad de Kafitness, con domicilio social en Santa Lucía de Laurel, Costa Rica.
        </p><p>
            <strong>2. Aceptación de los Términos y Condiciones</strong>
          </p><p>
            El uso del Sitio Web implica la aceptación de estos Términos y Condiciones por parte del usuario. El usuario debe leer atentamente estos Términos y Condiciones antes de utilizar el Sitio Web.
          </p><p>
            <strong>3. Objeto</strong>
          </p><p>
            El Sitio Web es una plataforma de información sobre el centro de acondicionamiento físico Kafitness. El Sitio Web permite a los usuarios conocer los servicios ofrecidos por Kafitness, así como reservar clases y servicios.
          </p><p>
            <strong>4. Uso del Sitio Web</strong>
          </p><p>
            El usuario se compromete a utilizar el Sitio Web de forma lícita y conforme a los Términos y Condiciones. El usuario se abstendrá de utilizar el Sitio Web para fines ilícitos o prohibidos, y de causar daños o perjuicios a Kafitness o a terceros.
          </p><p>
            <strong>5. Contenido del Sitio Web</strong>
          </p><p>
            El contenido del Sitio Web es propiedad de Kafitness o de sus proveedores de contenidos. El usuario se abstendrá de modificar, copiar, distribuir, transmitir, reproducir, publicar, vender o explotar de cualquier forma el contenido del Sitio Web sin el consentimiento expreso de Kafitness.
          </p><p>
            <strong>6. Propiedad intelectual</strong>
          </p><p>
            Todos los derechos de propiedad intelectual sobre el Sitio Web, incluyendo los derechos de autor, marcas, dibujos y modelos, logos, nombres comerciales, signos distintivos y demás derechos de propiedad intelectual, pertenecen a Kafitness o a sus respectivos propietarios.
          </p><p>
            <strong>7. Enlaces a otros sitios web</strong>
          </p><p>
            El Sitio Web puede incluir enlaces a otros sitios web. Kafitness no es responsable de los contenidos de estos sitios web, ni de las políticas de privacidad de los mismos.
          </p><p>
            <strong>8. Responsabilidad</strong>
          </p><p>
            Kafitness no se responsabiliza de los daños o perjuicios que pudieran causarse a los usuarios por el uso de este Sitio Web. Kafitness excluye cualquier responsabilidad por los daños y perjuicios de cualquier naturaleza que puedan deberse a la falta de disponibilidad o continuidad del Sitio Web o de sus servicios, a la defraudación de la utilidad que los usuarios hubieren podido atribuir al Sitio Web, a los fallos en el acceso a las distintas páginas web del Sitio Web o a sus servicios, a la introducción de virus o cualquier elemento informático dañino, a la falta de idoneidad del Sitio Web para los fines a los que fue destinado o a cualesquiera otros daños o perjuicios que se deriven del uso por parte de los usuarios del Sitio Web.
          </p><p>
            <strong>9. Legislación aplicable</strong>
          </p><p>
            Estos Términos y Condiciones se rigen por la legislación de la República de Costa Rica. Cualquier controversia que surja en relación con estos Términos y Condiciones se someterá a la jurisdicción de los tribunales de la República de Costa Rica.
          </p><p>
            <strong>10. Modificación de los Términos y Condiciones</strong>
          </p><p>
            Kafitness se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor a partir de la fecha de su publicación en el Sitio Web.
          </p><p>
            <strong>11. Duración</strong>
          </p><p>
            Estos Términos y Condiciones estarán en vigor indefinidamente.
          </p></>
        
        }
      </div>
      <footer>
        <nav>
          <ul className="miLista">
            
            <li><Link href="/principalreg" className="linkEstilizado">Volver</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Page;
