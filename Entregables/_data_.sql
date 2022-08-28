-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2022 a las 17:15:14
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `soie_bd`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `off`, `img`, `type`, `timeMinutes`, `active`) VALUES
(1, 'Intensive Serum Niacinamida', 'HDM : Contiene Niacinamida 10%, Ácido Hialurónico 0,2%, Vitamina E 0,2% y Zinc 0,2%. Regula la secreción de sebo e hidrata.Reduce visiblemente la apariencia de poros. Al favorecer la barrera que protege la humedad del rostro, logra hidratación y restaura el equilibrio cutáneo.', 1500, 12, '/images/products/higiene_facial.PNG', 0, 90, 1),
(2, 'Protector solar facial', 'EMULSIÓN FPS 50+ Protección solar facial diaria contra rayos UVA/ UVB sin color para todo tipo de pie. Previene el envejecimiento prematuro de la piel y aparición de manchas provocadas por el sol. Textura ligera y de rápida absorción.', 1600, 13, '/images/products/IMG_3235.jpg', 0, 0, 1),
(3, 'Peeling', 'Se aplica un peeling bio enzimático. Se deja actuar 15 minutos. Este peeling es apto para todo tipo de piel, incluso las sensibles.', 1800, 4, '/images/products/peeling.PNG', 0, 30, 1),
(4, 'Radiofrecuencia fraccionada', 'consiste en aumentar la temperatura de los tejidos sub-cutáneos por aporte energético de una onda electromagnética, la que por vibración molecular incrementa la temperatura del tejido, estimulando así la fabricación de colágeno y elastina.', 2500, 12, '/images/products/productos-031.jpg', 0, 120, 1),
(6, 'Pantalon Cuero', 'asojdunasljcnaslc', 800, 14, '/images/products/img-1658874464937-pantalon-cuero.jpg', 0, 0, 0);

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220827210101-users.js'),
('20220827210124-products.js'),
('20220828140902-category.js'),
('20220828145518-cart.js'),
('20220828150108-productCart.js'),
('20220828150625-status.js'),
('20220828150838-type.js'),
('20220828150850-time.js');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `birth`, `gender`, `img`, `password`, `adress`, `numberPhone`, `category`) VALUES
(1, 'Byrann', 'Giron', 'bgiron0@friendfeed.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/nonconsequunturitaque.png?size=50x50&set=set1', 'iLVWV2F', '', 0, 'client'),
(2, 'Gwennie', 'Rubinivitz', 'grubinivitz1@cyberchimps.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/quasimagnisequi.png?size=50x50&set=set1', 'LEbPmVmJhe', '', 0, 'client'),
(3, 'Darren', 'Keford', 'dkeford2@e-recht24.de', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/autemsuntpossimus.png?size=50x50&set=set1', 'RqkNbnx5aKC', '', 0, 'client'),
(4, 'Audie', 'Shellard', 'ashellard3@bbb.org', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/atmolestiaeillo.png?size=50x50&set=set1', '6OaXwsWNOK', '', 0, 'client'),
(5, 'Hammad', 'Bancroft', 'hbancroft4@mlb.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/autemvoluptasmodi.png?size=50x50&set=set1', '1e9ccA2Zp', '', 0, 'client'),
(6, 'Gabey', 'MacAnellye', 'gmacanellye5@yandex.ru', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/corporispariaturrem.png?size=50x50&set=set1', 'nfSHp7n', '', 0, 'client'),
(7, 'Anabal', 'Shillingford', 'ashillingford6@cocolog-nifty.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/iustoautomnis.png?size=50x50&set=set1', '4lK0aZDxO', '', 0, 'client'),
(8, 'Otis', 'Clother', 'oclother7@stumbleupon.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/repellendusdolortempora.png?size=50x50&set=set1', 'uwFXJogD', '', 0, 'client'),
(9, 'Averil', 'Boyen', 'aboyen8@myspace.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/idharumqui.png?size=50x50&set=set1', '5vAEOSisizR', '', 0, 'client'),
(10, 'Danya', 'Bly', 'dbly9@creativecommons.org', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/sithicaspernatur.png?size=50x50&set=set1', '0UPuaNTWMlVY', '', 0, 'client'),
(11, 'Angie', 'Glazzard', 'aglazzarda@ca.gov', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/etadipisciveritatis.png?size=50x50&set=set1', 'Nowu9ANQ', '', 0, 'client'),
(12, 'Ellwood', 'Iacovino', 'eiacovinob@rakuten.co.jp', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/minusnullaplaceat.png?size=50x50&set=set1', 'etB5Ut1seyZ', '', 0, 'client'),
(13, 'Zara', 'Marzello', 'zmarzelloc@yandex.ru', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/vitaeaperiamrepellendus.png?size=50x50&set=set1', 'bB9tUaeQCkf3', '', 0, 'client'),
(14, 'Goldina', 'Sanday', 'gsandayd@theatlantic.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/utoccaecaticumque.png?size=50x50&set=set1', 'iZgosywnRy', '', 0, 'client'),
(15, 'Philippa', 'Spedding', 'pspeddinge@unblog.fr', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/etenimdolores.png?size=50x50&set=set1', 'IHkHyWKAs', '', 0, 'client'),
(16, 'Ado', 'Starsmeare', 'astarsmearef@engadget.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/quisquasvoluptatem.png?size=50x50&set=set1', 'YgEjmXvR', '', 0, 'client'),
(17, 'Howie', 'Abson', 'habsong@dion.ne.jp', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/adipiscivoluptasnisi.png?size=50x50&set=set1', 'Gco0tTEv', '', 0, 'client'),
(18, 'Niki', 'Maidens', 'nmaidensh@theguardian.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/facereutfacilis.png?size=50x50&set=set1', 's97JpS6VY', '', 0, 'client'),
(19, 'Kaitlyn', 'Ettritch', 'kettritchi@typepad.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/autdolorenostrum.png?size=50x50&set=set1', 'WnQRDp85', '', 0, 'client'),
(20, 'Peter', 'Natwick', 'pnatwickj@sciencedirect.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/sitfugased.png?size=50x50&set=set1', 'iilQovZ4bH8', '', 0, 'admin'),
(21, 'Manuel', 'Belgrano', 'manuArg@gmail.com', '2022-08-02 00:00:00', 'Hombre', '/imgs/users/avatars/default.jpg', '$2b$10$o/YsPVFJjHFSFDiDSa6.wexwA4bZoZr9qfRIw64XLtR4cU4rXH7cS', '', 0, NULL),
(22, 'Manuel', 'Belgrano', 'manuArgento@gmail.com', '2022-08-02 00:00:00', 'Hombre', '/imgs/users/avatars/default.jpg', '$2b$10$4c1rMQBtiNrGXx6c.HC3iuReLM9IrMabCIgQkoFN5KBwc9CVsuafS', '', 0, NULL),
(23, 'Manuel', 'Belgrano', 'manuCabj@gmail.com', '2022-09-06 00:00:00', 'Hombre', '/imgs/users/avatars/default.jpg', '$2b$10$YancRMtXU1Qwaq74V/Iz3eEy6vGdvMDQ0aQh5QXb60DGCAHVnI5UO', '', 0, NULL),
(24, 'Felipe', 'Mataviejas', 'feliEl6@gmail.com', '1159-09-16 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$GsjDkdGgSdsHXJTk2Ay61eCVqrBS9MkSl89emHaabR8bq.pMziWue', 'French', 2147483647, 'client'),
(25, 'Anakin', 'Skywalker', 'imYourFather@jedi.com', '2990-07-13 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$aO7uRkf0259eBBEus1t//OE9r0XgJip1DC2uU3hxBClZQf35/PXV6', 'Tatooine', 2147483647, 'client');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
