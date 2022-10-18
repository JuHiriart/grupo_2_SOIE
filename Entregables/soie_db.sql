-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-10-2022 a las 00:40:23
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
-- Base de datos: `soie_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `banner`
--

INSERT INTO `banner` (`id`, `img`) VALUES
(1, '/images/banner/Banner_1.PNG'),
(2, '/images/banner/Banner_2.PNG'),
(3, '/images/banner/Banner_3.JPG'),
(4, '/images/banner/Banner_4.jpg'),
(5, '/images/banner/Banner_5.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `description`) VALUES
(1, 'Usuario común'),
(2, 'Administrador'),
(3, 'Super administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcart`
--

CREATE TABLE `productcart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `off` int(11) DEFAULT NULL,
  `img` text NOT NULL,
  `id_type` int(11) NOT NULL,
  `id_time` int(11) NOT NULL,
  `active` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `off`, `img`, `id_type`, `id_time`, `active`) VALUES
(1, 'Higiene Facial', 'Tratamiento cuyo fin es mejorar el aspecto de la piel, removiendo absolutamente todas las células muertas superficiales, toxinas, imperfecciones, puntos negros y microquistes que se van acumulando con el tiempo.', 1500, 5, '/images/products/img-1665442376156-higiene-facial.jpg', 1, 3, 1),
(2, 'Protector solar facial SILUMA', 'EMULSIÓN FPS 50+ Protección solar facial diaria contra rayos UVA/ UVB sin color para todo tipo de pie. Previene el envejecimiento prematuro de la piel y aparición de manchas provocadas por el sol. Textura ligera y de rápida absorción.', 1600, 13, '/images/products/img-1665448531451-protector-solar-facial-siluma.jpg', 2, 0, 1),
(3, 'Peeling', 'Se aplica un peeling bio enzimático. Se deja actuar 15 minutos. Este peeling es apto para todo tipo de piel, incluso las sensibles.', 1800, 5, '/images/products/peeling.PNG', 1, 1, 1),
(4, 'Radiofrecuencia fraccionada', 'consiste en aumentar la temperatura de los tejidos sub-cutáneos por aporte energético de una onda electromagnética, la que por vibración molecular incrementa la temperatura del tejido, estimulando así la fabricación de colágeno y elastina.', 2500, 12, '/images/products/img-1665441544891-radiofrecuencia-fraccionada.PNG', 1, 4, 1),
(13, 'Rejuvenecimiento ', 'Rejuvenecimiento facial se hacen mediante tecnología láser, ácido hialurónico o radiofrecuencia, entre otros, una amplia diversidad de tecnologías eficaces y seguras, ideales para combatir el envejecimiento sin cirugía y conseguir una piel más brillante y luminosa.', 3500, 0, '/images/products/img-1665442876532-rejuvenecimiento-.jpg', 1, 2, 1),
(14, 'Emulsion con ceramidas ', 'Armoniza el equilibrio hídrico de la piel.\r\n\r\nRecompone los lípidos cutáneos. Promueve la hidratación profunda y prolongada. Regula la evaporación del agua transepidérmica.\r\n\r\nContiene: Con Ceramidas puras biosintetizadas I-III-VI', 3500, 2, '/images/products/img-1665444297902-emulsion-con-ceramidas-.webp', 2, 0, 1),
(15, 'Salix max ', 'Previene la aparición de puntos negros, cierra los poros e inhibe su oscurecimiento\r\n• Exfolia de manera segura dejando una textura homogénea, suave y delicada \r\n• Mantiene el nivel de hidratación óptimo de la piel \r\n• Aporta luminosidad • Reduce la inflamación ', 1820, 0, '/images/products/img-1665444530671-salix-max-.jpg', 2, 0, 1),
(16, 'Emulfresh con betaglucanos', '• Previene la aparición de rojeces \r\n• Inhibe las sensaciones de disconfort cutáneo tales como ardor y picor \r\n• Disminuye la vulnerabilidad cutánea frente a las agresiones externas (viento, cambios bruscos de temperatura, etc.) ', 1450, 5, '/images/products/img-1665444688362-emulfresh-con-betaglucanos.jpg', 2, 0, 1),
(18, ' Phito Plus', 'Controla la formación de manchas.\r\nDespigmenta sin agredir Antiage Regenera sin provocar sensibilidad Antioxidante.\r\nCombate distintos tipos de Dermatitis y Psoriasis Antibacteriano', 3500, 10, '/images/products/img-1665445004300--phito-plus.jpg', 2, 0, 1),
(19, 'Serum Facial Iluminador', 'Aporta Vit C , acido hialuronico y Vitamina B3 ideal para revitalizar , hidratar e iluminar la piel de todo tipo. Apto piel sensible.', 950, 0, '/images/products/img-1665445150345-serum-facial-iluminador.jpg', 2, 0, 1),
(20, 'lip balm', 'Reparador , suavizante de labios, aporta flexibilidad y firmeza .Contiene manteca de Karite y Vit E.', 580, 0, '/images/products/img-1665445221554-lip-balm.jpg', 2, 0, 1),
(21, 'Set Relleno de Arrugas - Serum y crema Hyaluronic 4D Lidherma', 'Serum: concentrado hidratante con efecto relleno.\r\n\r\n✔ Toda la potencia del ácido hialurónico en su máxima concentración en efecto sinérgico con carrageninas.\r\n\r\n✔ Fórmulado con un activo que combina cuatro moléculas diferentes de ácido hialurónico que actúan en distintos niveles.', 7500, 30, '/images/products/img-1665448789308-set-relleno-de-arrugas---serum-y-crema-hyaluronic-4d-lidherma.png', 2, 0, 1),
(22, 'Soothing Mask', 'Refresca brindando verdadera sensación de confort, . \r\nAtenúa el enrojecimiento causado por las agresiones externas y/o los tratamientos estéticos.  \r\nSuaviza delicadamente restableciendo la integridad natural de la piel. ', 2500, 0, '/images/products/img-1665449304919-soothing-mask.jpg', 2, 0, 1),
(23, 'Facial Acné o Rosácea Adultos', 'Tratamiento facial para niños y jóvenes con  piel grasa, ó con acné (leve a severo) y/o con Rosácea. \r\nIncluye limpieza, exfoliación, des incrustación, máscara de fangoterapia y carbón activado. Atiende rostro y cuello. Unisex, resultados rápidos y notorios.', 1500, 0, '/images/products/img-1665449994602-facial-acné-o-rosácea-adultos.jpg', 1, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `description`) VALUES
(1, 'Producto'),
(2, 'Servicio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `time`
--

CREATE TABLE `time` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `time`
--

INSERT INTO `time` (`id`, `description`) VALUES
(0, 'sin tiempo'),
(1, '30 minutos'),
(2, '1 hora'),
(3, '1 hora 30 minutos'),
(4, '2 horas'),
(5, '2 horas 30 minutos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `type`
--

INSERT INTO `type` (`id`, `description`) VALUES
(1, 'Servicio'),
(2, 'Producto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birth` datetime NOT NULL,
  `gender` text NOT NULL,
  `image` text NOT NULL,
  `password` text NOT NULL,
  `address` text NOT NULL,
  `numberPhone` int(11) NOT NULL,
  `id_category` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `birth`, `gender`, `image`, `password`, `address`, `numberPhone`, `id_category`) VALUES
(1, 'Byrann', 'Giron', 'bgiron0@friendfeed.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/nonconsequunturitaque.png?size=50x50&set=set1', 'iLVWV2F', '', 0, '1'),
(2, 'Gwennie', 'Rubinivitz', 'grubinivitz1@cyberchimps.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/quasimagnisequi.png?size=50x50&set=set1', 'LEbPmVmJhe', '', 0, '1'),
(3, 'Darren', 'Keford', 'dkeford2@e-recht24.de', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/autemsuntpossimus.png?size=50x50&set=set1', 'RqkNbnx5aKC', '', 0, '1'),
(4, 'Audie', 'Shellard', 'ashellard3@bbb.org', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/atmolestiaeillo.png?size=50x50&set=set1', '6OaXwsWNOK', '', 0, '1'),
(5, 'Hammad', 'Bancroft', 'hbancroft4@mlb.com', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/autemvoluptasmodi.png?size=50x50&set=set1', '1e9ccA2Zp', '', 0, '1'),
(6, 'Gabey', 'MacAnellye', 'gmacanellye5@yandex.ru', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/corporispariaturrem.png?size=50x50&set=set1', 'nfSHp7n', '', 0, '1'),
(7, 'Anabal', 'Shillingford', 'ashillingford6@cocolog-nifty.com', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/iustoautomnis.png?size=50x50&set=set1', '4lK0aZDxO', '', 0, '1'),
(8, 'Otis', 'Clother', 'oclother7@stumbleupon.com', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/repellendusdolortempora.png?size=50x50&set=set1', 'uwFXJogD', '', 0, '1'),
(9, 'Averil', 'Boyen', 'aboyen8@myspace.com', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/idharumqui.png?size=50x50&set=set1', '5vAEOSisizR', '', 0, '1'),
(10, 'Danya', 'Bly', 'dbly9@creativecommons.org', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/sithicaspernatur.png?size=50x50&set=set1', '0UPuaNTWMlVY', '', 0, '1'),
(11, 'Angie', 'Glazzard', 'aglazzarda@ca.gov', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/etadipisciveritatis.png?size=50x50&set=set1', 'Nowu9ANQ', '', 0, '1'),
(12, 'Ellwood', 'Iacovino', 'eiacovinob@rakuten.co.jp', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/minusnullaplaceat.png?size=50x50&set=set1', 'etB5Ut1seyZ', '', 0, '1'),
(13, 'Zara', 'Marzello', 'zmarzelloc@yandex.ru', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/vitaeaperiamrepellendus.png?size=50x50&set=set1', 'bB9tUaeQCkf3', '', 0, '1'),
(14, 'Goldina', 'Sanday', 'gsandayd@theatlantic.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/utoccaecaticumque.png?size=50x50&set=set1', 'iZgosywnRy', '', 0, '1'),
(15, 'Philippa', 'Spedding', 'pspeddinge@unblog.fr', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/etenimdolores.png?size=50x50&set=set1', 'IHkHyWKAs', '', 0, '1'),
(16, 'Ado', 'Starsmeare', 'astarsmearef@engadget.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/quisquasvoluptatem.png?size=50x50&set=set1', 'YgEjmXvR', '', 0, '1'),
(17, 'Howie', 'Abson', 'habsong@dion.ne.jp', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/adipiscivoluptasnisi.png?size=50x50&set=set1', 'Gco0tTEv', '', 0, '1'),
(18, 'Niki', 'Maidens', 'nmaidensh@theguardian.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/facereutfacilis.png?size=50x50&set=set1', 's97JpS6VY', '', 0, '1'),
(19, 'Kaitlyn', 'Ettritch', 'kettritchi@typepad.com', '0000-00-00 00:00:00', 'Mujer', 'https://robohash.org/autdolorenostrum.png?size=50x50&set=set1', 'WnQRDp85', '', 0, '1'),
(20, 'Peter', 'Natwick', 'pnatwickj@sciencedirect.com', '0000-00-00 00:00:00', 'Hombre', 'https://robohash.org/sitfugased.png?size=50x50&set=set1', 'iilQovZ4bH8', '', 0, '2'),
(21, 'Manuel', 'Belgrano', 'manuArg@gmail.com', '2022-08-02 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$o/YsPVFJjHFSFDiDSa6.wexwA4bZoZr9qfRIw64XLtR4cU4rXH7cS', '', 0, '1'),
(22, 'Manuel', 'Belgrano', 'manuArgento@gmail.com', '2022-08-02 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$4c1rMQBtiNrGXx6c.HC3iuReLM9IrMabCIgQkoFN5KBwc9CVsuafS', '', 0, '1'),
(23, 'Manuel', 'Belgrano', 'manuCabj@gmail.com', '2022-09-06 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$YancRMtXU1Qwaq74V/Iz3eEy6vGdvMDQ0aQh5QXb60DGCAHVnI5UO', '', 0, '1'),
(24, 'Felipe', 'Mataviejas', 'feliEl6@gmail.com', '1159-09-16 00:00:00', 'Mujer', '/images/users/avatars/default.jpg', '$2b$10$GsjDkdGgSdsHXJTk2Ay61eCVqrBS9MkSl89emHaabR8bq.pMziWue', 'French', 2147483647, '1'),
(25, 'Anakin', 'Skywalker', 'imYourFather@jedi.com', '2990-07-13 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$aO7uRkf0259eBBEus1t//OE9r0XgJip1DC2uU3hxBClZQf35/PXV6', 'Tatooine', 2147483647, '1'),
(36, 'PEPE3', 'PEPE3', 'PEPE4@PEPE.com', '1990-11-11 00:00:00', 'Otro', '/images/users/avatars/default.jpg', '$2b$10$4Odd/2DUugo7D3/KgtSnPe4AVeKkkp013muERPrYhaqS0srrHCQQa', 'pepepepepe', 1169628997, '1'),
(39, 'admin2', 'admin2', 'admin2@admin.com', '2000-11-11 00:00:00', 'Otro', '/images/users/avatars/img-1664495452025-admin2.png', '$2b$10$9T63WbIuDMMvub6YAyM9Fez.kkmp6k44IcUj79HnDoAIBRYSzrGqO', 'pepepepepe', 1169628997, '1'),
(41, 'Juan Pablo', 'Chirolita', 'juanpablochirolita@gmail.com.br', '2001-01-01 00:00:00', 'Hombre', '/images/users/avatars/img-1664913387783-juan-pablo.jpg', '$2b$10$89470.8/JfKyEFeNwnBNuOljWjtuNNb9U55irLlLdVeK1CYJNdg5G', 'calle falsa 123', 1198765432, '1'),
(42, 'admin', 'admin', 'admin@admin.com', '2000-10-10 00:00:00', 'Hombre', '/images/users/avatars/default.jpg', '$2b$10$0MQrMmpYZe/7MqBj8GrCZOqMLDgExrYznp8NNuGLGT7VlW4V.jSsO', 'calle', 1100000000, '3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productcart`
--
ALTER TABLE `productcart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productcart`
--
ALTER TABLE `productcart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `time`
--
ALTER TABLE `time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
