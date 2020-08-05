



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



CREATE TABLE `activity` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `indexOrder` int(11) NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `activity` (`id`, `name`, `indexOrder`, `isActive`) VALUES
(5, 'Configuration', 5, 1),
(21, 'Reports', 4, 1),
(22, 'Setting', 5, 1),
(23, 'Work Brench', 3, 1),
(24, 'Schemes', 6, 1),
(25, 'Website', 2, 1);



CREATE TABLE `attkey` (
  `id` int(15) NOT NULL,
  `attName` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `attkey` (`id`, `attName`) VALUES
(1, 'height'),
(2, 'width'),
(3, 'class'),
(4, 'title'),
(5, 'id'),
(6, 'style'),
(7, 'columns'),
(8, 'row'),
(9, 'href'),
(10, 'src');

-- --------------------------------------------------------

--
-- Table structure for table `attkeyval`
--

CREATE TABLE `attkeyval` (
  `id` int(15) NOT NULL,
  `guiToolId` int(15) NOT NULL,
  `attKeyId` int(15) NOT NULL,
  `attVal` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attkeyval`
--

INSERT INTO `attkeyval` (`id`, `guiToolId`, `attKeyId`, `attVal`) VALUES
(6, 1, 1, NULL),
(7, 1, 2, '100%'),
(8, 1, 3, 'row'),
(9, 1, 7, '1'),
(10, 1, 8, '1'),
(11, 1, 6, NULL),
(12, 2, 3, NULL),
(13, 2, 5, NULL),
(14, 2, 6, NULL),
(15, 3, 3, NULL),
(16, 3, 5, NULL),
(17, 3, 6, NULL),
(18, 4, 3, NULL),
(19, 4, 5, NULL),
(20, 4, 6, NULL),
(21, 5, 3, NULL),
(22, 5, 5, NULL),
(23, 5, 6, NULL),
(24, 6, 3, NULL),
(25, 6, 5, NULL),
(26, 6, 6, NULL),
(27, 7, 3, NULL),
(28, 7, 5, NULL),
(29, 7, 6, NULL),
(30, 8, 3, NULL),
(31, 8, 5, NULL),
(32, 8, 6, NULL),
(33, 9, 3, NULL),
(34, 9, 5, NULL),
(35, 9, 6, NULL),
(36, 9, 9, NULL),
(37, 10, 3, NULL),
(38, 10, 5, NULL),
(39, 10, 6, NULL),
(40, 10, 10, NULL),
(41, 11, 3, NULL),
(42, 11, 5, NULL),
(43, 11, 6, NULL),
(44, 12, 3, NULL),
(45, 12, 5, NULL),
(46, 12, 6, NULL),
(47, 13, 3, NULL),
(48, 13, 5, NULL),
(49, 13, 6, NULL),
(50, 14, 1, NULL),
(51, 14, 2, NULL),
(52, 14, 3, NULL),
(53, 14, 5, NULL),
(54, 14, 6, NULL),
(55, 14, 7, NULL),
(56, 14, 8, NULL),
(57, 15, 3, NULL),
(58, 15, 5, NULL),
(59, 15, 6, NULL),
(60, 16, 3, NULL),
(61, 16, 5, NULL),
(62, 16, 6, NULL),
(63, 17, 3, NULL),
(64, 17, 5, NULL),
(65, 17, 6, NULL);


CREATE TABLE `businessprofile` (
  `id` int(20) NOT NULL,
  `businessname` varchar(30) DEFAULT NULL,
  `headoffice` varchar(30) DEFAULT NULL,
  `phonenumber` varchar(20) DEFAULT NULL,
  `website` varchar(30) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `userId` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `category` (
  `id` int(15) NOT NULL,
  `categoryName` varchar(50) NOT NULL,
  `parentId` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `categorypge`
--

CREATE TABLE `categorypge` (
  `id` int(15) NOT NULL,
  `categoryId` int(15) NOT NULL,
  `fileName` varchar(250) NOT NULL,
  `filePath` varchar(250) NOT NULL,
  `creationDate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cf`
--

CREATE TABLE `cf` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(15) NOT NULL,
  `sessionId` varchar(150) NOT NULL,
  `itemId` int(15) NOT NULL,
  `qty` int(15) NOT NULL,
  `isActive` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `codebuilder`
--

CREATE TABLE `codebuilder` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `columncontent`
--

CREATE TABLE `columncontent` (
  `id` int(15) NOT NULL,
  `contextContent` longtext NOT NULL,
  `columnId` int(15) NOT NULL,
  `creationDate` datetime DEFAULT current_timestamp(),
  `modificationDate` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `isActive` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `columncontent`
--

INSERT INTO `columncontent` (`id`, `contextContent`, `columnId`, `creationDate`, `modificationDate`, `isActive`) VALUES
(3, 'PGRpdiBkYXRhLXRodW1iPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zbGlkZXItMS5qcGciIGRhdGEtc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zbGlkZXItMS5qcGciPiZuYnNwOzwvZGl2Pgo8ZGl2IGRhdGEtdGh1bWI9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL3NsaWRlci0yLmpwZyIgZGF0YS1zcmM9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL3NsaWRlci0yLmpwZyI+CjxkaXYgY2xhc3M9ImNhbWVyYV9jYXB0aW9uIj4KPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KPGg1IGNsYXNzPSIgd293IGZhZGVJblVwIGFuaW1hdGVkIj5NZWNoYW5pY2FsPC9oNT4KPGgzIGNsYXNzPSIgd293IGZhZGVJblVwIGFuaW1hdGVkIiBkYXRhLXdvdy1kZWxheT0iMC41cyI+RW5naW5lZXJpbmc8L2gzPgo8cCBjbGFzcz0iIHdvdyBmYWRlSW5VcCBhbmltYXRlZCIgZGF0YS13b3ctZGVsYXk9IjAuOHMiPiZuYnNwOzwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBkYXRhLXRodW1iPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zbGlkZXItMy5qcGciIGRhdGEtc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zbGlkZXItMy5qcGciPgo8ZGl2IGNsYXNzPSJjYW1lcmFfY2FwdGlvbiI+CjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CjxoNSBjbGFzcz0iIHdvdyBmYWRlSW5VcCBhbmltYXRlZCI+RWxlY3RyaWNhbDwvaDU+CjxoMyBjbGFzcz0iIHdvdyBmYWRlSW5VcCBhbmltYXRlZCIgZGF0YS13b3ctZGVsYXk9IjAuNXMiPkVuZ2luZWVyaW5nPC9oMz4KPHAgY2xhc3M9IiB3b3cgZmFkZUluVXAgYW5pbWF0ZWQiIGRhdGEtd293LWRlbGF5PSIwLjhzIj4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgZGF0YS10aHVtYj0icHVibGljL2ltcG9ydC9pbWFnZXMvc2xpZGVyLTQuanBnIiBkYXRhLXNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvc2xpZGVyLTQuanBnIj4KPGRpdiBjbGFzcz0iY2FtZXJhX2NhcHRpb24iPgo8ZGl2IGNsYXNzPSJjb250YWluZXIiPgo8aDUgY2xhc3M9IiB3b3cgZmFkZUluVXAgYW5pbWF0ZWQiPkNvbnN0cnVjdGlvbjwvaDU+CjxoMyBjbGFzcz0iIHdvdyBmYWRlSW5VcCBhbmltYXRlZCIgZGF0YS13b3ctZGVsYXk9IjAuNXMiPkVuZ2luZWVyaW5nPC9oMz4KPHAgY2xhc3M9IiB3b3cgZmFkZUluVXAgYW5pbWF0ZWQiIGRhdGEtd293LWRlbGF5PSIwLjhzIj4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgZGF0YS10aHVtYj0icHVibGljL2ltcG9ydC9pbWFnZXMvc2xpZGVyLTUuanBnIiBkYXRhLXNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvc2xpZGVyLTUuanBnIj4KPGRpdiBjbGFzcz0iY2FtZXJhX2NhcHRpb24iPgo8ZGl2IGNsYXNzPSJjb250YWluZXIiPgo8aDUgY2xhc3M9IiB3b3cgZmFkZUluVXAgYW5pbWF0ZWQiPlJldGFpbCBBZHZpc29yeTwvaDU+CjxoMyBjbGFzcz0iIHdvdyBmYWRlSW5VcCBhbmltYXRlZCIgZGF0YS13b3ctZGVsYXk9IjAuNXMiPlNlcnZpY2U8L2gzPgo8cCBjbGFzcz0iIHdvdyBmYWRlSW5VcCBhbmltYXRlZCIgZGF0YS13b3ctZGVsYXk9IjAuOHMiPiZuYnNwOzwvcD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4=', 1, '2020-07-07 09:18:33', '2020-07-12 21:49:11', 1),
(4, 'PGRpdiBjbGFzcz0icm93IGJ1aWxkZXJfYWxsIj4KPGRpdiBjbGFzcz0iY29sLW1kLTMgY29sLXNtLTYgYnVpbGRlciI+PGkgY2xhc3M9ImZhIGZhLWhvbWUiPjwvaT4KPGg0PlByb2Zlc3Npb25hbCBCdWlsZGU8L2g0Pgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtbWQtMyBjb2wtc20tNiBidWlsZGVyIj48aSBjbGFzcz0iZmEgZmEtYnVpbGRpbmciPjwvaT4KPGg0PldlIERlbGl2ZXIgUXVhbGl0eTwvaDQ+CjxwPiZuYnNwOzwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC1tZC0zIGNvbC1zbS02IGJ1aWxkZXIiPjxpIGNsYXNzPSJmYSBmYS1jbG9jay1vIj48L2k+CjxoND5BbHdheXMgT24gVGltZTwvaDQ+CjxwPiZuYnNwOzwvcD4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC1tZC0zIGNvbC1zbS02IGJ1aWxkZXIiPjxpIGNsYXNzPSJmYSBmYS10aHVtYnMtdXAiPjwvaT4KPGg0PldlIEFyZSBQYXNpb25hdGU8L2g0Pgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4=', 6, '2020-07-12 22:16:52', '2020-07-14 02:38:08', 1),
(5, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5BQk9VVCBVUzwvaDI+CjxoND4mbmJzcDs8L2g0Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IGFib3V0X3JvdyI+CjxkaXYgY2xhc3M9Indob193ZV9hcmVhIGNvbC1tZC03IGNvbC1zbS02Ij4KPGRpdiBjbGFzcz0ic3VidGl0dGxlIj4KPGgyPldITyBXRSBBUkU8L2gyPgo8L2Rpdj4KPHA+QlJZQ0sgSW52ZXN0bWVudHMgaXMgYSBzZXJ2aWNlIGNvbXBhbnkgbG9va2luZyB0b3dhcmRzIHRoZSBmdXR1cmUgaW4gY2hhbmdpbmcgdGhlIGZhY2Ugb2YgdGhlIHNlcnZpY2UgaW5kdXN0cnkgaW4gVWdhbmRhLiA8YnI+IEJyeWNrIEludmVzdG1lbnRzIGlzIGEgVWdhbmRhbiBpbmNvcnBvcmF0ZWQgc2VydmljZSBjb21wYW55IGFuZCBsb2NhbGx5IG93bmVkLiBXZSBhcmUgYSBzb2xpZGFyaXR5LW1pbmRlZCBmaXJtIG9wZW5pbmcgdGhlIHdheSBmb3IgZW1wbG95ZWVzIHRvIGJlY29tZSBwYXJ0bmVycyBvdmVydGltZS48YnI+V2Ugb2ZmZXIgcHJlbWl1bSBhbmQgdW5tYXRjaGVkIHNlcnZpY2VzIGFuZCB0aGVzZSBpbmNsdWRlOzwvcD4KPHVsPgo8bGk+RWxlY3RyaWNhbDwvbGk+CjxsaT5Db25zdHJ1Y3Rpb248L2xpPgo8bGk+TWVjaGFuaWNhbDwvbGk+CjxsaT5SZXRhaWwgQWR2aXNvcnk8L2xpPgo8L3VsPgo8cD4mbmJzcDs8L3A+CjxhIGNsYXNzPSJidXR0b25fYWxsIiBocmVmPSIjIj5Db250YWN0IE5vdzwvYT48L2Rpdj4KPGRpdiBjbGFzcz0iY29sLW1kLTUgY29sLXNtLTYgYWJvdXRfY2xpZW50Ij48aW1nIHN0eWxlPSJoZWlnaHQ6IDQyMHB4OyIgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9XaG8gV2UgQXJlIEltYWdlLmpwZyIgYWx0PSIiPjwvZGl2Pgo8L2Rpdj4=', 7, '2020-07-14 02:46:12', '2020-07-14 10:04:22', 1),
(6, 'PGRpdiBjbGFzcz0id2hvX3dlX2FyZWEgY29sLW1kLTcgY29sLXNtLTYiPgo8ZGl2IGNsYXNzPSJzdWJ0aXR0bGUiPgo8aDI+V0hPIFdFIEFSRTwvaDI+CjwvZGl2Pgo8cD5UaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHMgd2hpY2ggZG9uJ3QgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUuIElmIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGEgcGFzc2FnZSBvZiBMb3JlbSBJcHN1bSwgeW91IG5lZWQgdG8gYmUgc3VyZSB0aGVyZSBpc24ndCBhbnl0aGluZyBlbWJhcnJhc3NpbmcgaGlkZGVuIGluIHRoZSBtaWRkbGUgb2YgdGV4dC48L3A+CjxhIGNsYXNzPSJidXR0b25fYWxsIiBocmVmPSIjIj5Db250YWN0IE5vdzwvYT48L2Rpdj4KPGRpdiBjbGFzcz0iY29sLW1kLTUgY29sLXNtLTYgYWJvdXRfY2xpZW50Ij48aW1nIHNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvYWJvdXRfY2xpZW50LmpwZyIgYWx0PSIiPjwvZGl2Pg==', 8, '2020-07-14 02:49:00', NULL, 1),
(7, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5CcnljayBTZXJ2aWNlcyAmYW1wOyBCcnljayBNYXJ0PC9oMj4KPC9kaXY+CjxkaXYgY2xhc3M9InJvdyBjb25zdHJ1Y3Rpb25faW5lciI+CjxkaXYgY2xhc3M9ImNvbC1tZC0zIGNvbC1zbS02IGNvbnN0cnVjdGlvbiI+CjxkaXYgY2xhc3M9ImNucy1pbWciPjxpbWcgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zbGlkZXItMi5qcGciIGFsdD0iIj48L2Rpdj4KPGRpdiBjbGFzcz0iY25zLWNvbnRlbnQiPjxpIGNsYXNzPSJmYSBmYS1ib2x0Ij48L2k+IDxhIGhyZWY9IiMiPkVsZWN0cmljYWw8L2E+CjxwPiZuYnNwOzwvcD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtbWQtMyBjb2wtc20tNiBjb25zdHJ1Y3Rpb24iPgo8ZGl2IGNsYXNzPSJjbnMtaW1nIj48aW1nIHNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvc2xpZGVyLTMuanBnIiBhbHQ9IiI+PC9kaXY+CjxkaXYgY2xhc3M9ImNucy1jb250ZW50Ij48aSBjbGFzcz0iZmEgZmEtY29ncyI+PC9pPiA8YSBocmVmPSIjIj5NZWNoYW5pY2FsPC9hPgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLW1kLTMgY29sLXNtLTYgY29uc3RydWN0aW9uIj4KPGRpdiBjbGFzcz0iY25zLWltZyI+PGltZyBzcmM9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL3NsaWRlci00LmpwZyIgYWx0PSIiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjbnMtY29udGVudCI+PGkgY2xhc3M9ImZhIGZhLWdhdmVsIj48L2k+IDxhIGhyZWY9IiMiPkNvbnN0cnVjdGlvbjwvYT4KPHA+Jm5ic3A7PC9wPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC1tZC0zIGNvbC1zbS02IGNvbnN0cnVjdGlvbiI+CjxkaXYgY2xhc3M9ImNucy1pbWciPjxpbWcgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zbGlkZXItNS5qcGciIGFsdD0iIj48L2Rpdj4KPGRpdiBjbGFzcz0iY25zLWNvbnRlbnQiPjxpIGNsYXNzPSJmYSBmYS1jYXJ0LXBsdXMiPjwvaT4gPGEgaHJlZj0iIyI+UmV0YWlsIEFkdmlzb3J5PC9hPgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+', 9, '2020-07-14 03:14:21', '2020-07-14 15:57:24', 1),
(8, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5IT1cgV0UgV09SSzwvaDI+CjxoND5CcnljayBJbnZlc3RtZW50cyBkZWxpdmVycyB1bnJpdmFsZWQgYW5kIGlubm92YXRpdmUgZWxlY3RyaWNhbCwgY29uc3RydWN0aW9uLCBtZWNoYW5pY2FsIGFuZCByZXRhaWwgYWR2aXNvcnkgc29sdXRpb25zIHlvdSBjYW4gcmVseSBvbi48L2g0Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iZmVhdHVyZV9yb3cgcm93Ij4KPGRpdiBjbGFzcz0iY29sLW1kLTYgZmVhdHVyZV9pbWciPjxpbWcgc3R5bGU9ImhlaWdodDogODAwcHg7IiBzcmM9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL0hvdyBXZSBXb3JrIEltYWdlLmpwZyIgYWx0PSIiPjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtbWQtNiBmZWF0dXJlX2NvbnRlbnQiPgo8ZGl2IGNsYXNzPSJzdWJ0aXR0bGUiPgo8aDI+U3RyYXRlZ3kgZm9yIHRoZSBjb250cmFjdDwvaDI+CjxoNT5VcG9uIGJlaW5nIGF3YXJkZWQgYSBjb250cmFjdCwgd2Ugb3JnYW5pc2UgYW5kIHNldCB1cCBhbiBlZmZlY3RpdmUgbWFuYWdlbWVudCBhbmQgc3VwZXJ2aXNpb24gdGVhbSB0aGF0IGlzIHN0cnVjdHVyZWQgc3BlY2lmaWNhbGx5IGZvciBlYWNoIHByb2plY3QuIFRoZSBwcm9qZWN0IHRlYW0gaXMgZHJhd24gZnJvbSB0aGUgdGVjaG5pY2FsIGFuZCBtYW5hZ2VtZW50IHJlc291cmNlcyB3aXRoaW4gdGhlIGNvbXBhbnkgdG8gcHJvdmlkZSBwZXJzb25uZWwgd2l0aCB0aGUgbmVjZXNzYXJ5IHNraWxscyByZXF1aXJlZCBmb3IgZWFjaCBzdGFnZSBvZiB0aGUgcHJvamVjdC48L2g1Pgo8L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEiPgo8ZGl2IGNsYXNzPSJtZWRpYS1sZWZ0Ij48YSBocmVmPSIjIj4gPGkgY2xhc3M9ImZhIGZhLXVzZXJzIj48L2k+IDwvYT48L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEtYm9keSI+PGEgaHJlZj0iIyI+TGlhaXNvbiBhbmQgQ29tbXVuaWNhdGlvbjwvYT4KPHA+JmFtcDtuYnBzOzwvcD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJtZWRpYSI+CjxkaXYgY2xhc3M9Im1lZGlhLWxlZnQiPjxhIGhyZWY9IiMiPiA8aSBjbGFzcz0iZmEgZmEtY2hlY2siPjwvaT4gPC9hPjwvZGl2Pgo8ZGl2IGNsYXNzPSJtZWRpYS1ib2R5Ij48YSBocmVmPSIjIj5Ta2lsbHMg4oCYRml0IGZvciBQdXJwb3Nl4oCZPC9hPgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEiPgo8ZGl2IGNsYXNzPSJtZWRpYS1sZWZ0Ij48YSBocmVmPSIjIj4gPGkgY2xhc3M9ImZhIGZhLWJ1aWxkaW5nIj48L2k+IDwvYT48L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEtYm9keSI+PGEgaHJlZj0iIyI+T3JnYW5pc2F0aW9uPC9hPgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEiPgo8ZGl2IGNsYXNzPSJtZWRpYS1sZWZ0Ij48YSBocmVmPSIjIj4gPGkgY2xhc3M9ImZhIGZhLWNlcnRpZmljYXRlIj48L2k+IDwvYT48L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEtYm9keSI+PGEgaHJlZj0iIyI+UXVhbGl0eSBNZWFzdXJlbWVudDwvYT4KPHA+Jm5ic3A7PC9wPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9Im1lZGlhIj4KPGRpdiBjbGFzcz0ibWVkaWEtbGVmdCI+PGEgaHJlZj0iIyI+IDxpIGNsYXNzPSJmYSBmYS1pbmR1c3RyeSI+PC9pPiA8L2E+PC9kaXY+CjxkaXYgY2xhc3M9Im1lZGlhLWJvZHkiPjxhIGhyZWY9IiMiPkJ1c2luZXNzIENvbnRpbnVpdHk8L2E+CjxwPiZuYnNwOzwvcD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJtZWRpYSI+CjxkaXYgY2xhc3M9Im1lZGlhLWxlZnQiPjxhIGhyZWY9IiMiPiA8aSBjbGFzcz0iZmEgZmEtc2hpZWxkIj48L2k+IDwvYT48L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEtYm9keSI+PGEgaHJlZj0iIyI+U2FmZSBXb3JraW5nIEVudmlyb25tZW50PC9hPgo8cD4mbmJzcDs8L3A+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0ibWVkaWEiPgo8ZGl2IGNsYXNzPSJtZWRpYS1sZWZ0Ij48YSBocmVmPSIjIj4gPGkgY2xhc3M9ImZhIGZhLXNoaWVsZCI+PC9pPiA8L2E+PC9kaXY+CjxkaXYgY2xhc3M9Im1lZGlhLWJvZHkiPjxhIGhyZWY9IiMiPk5vIEV4cG9zdXJlczwvYT4KPHA+Jm5ic3A7PC9wPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9Im1lZGlhIj4KPGRpdiBjbGFzcz0ibWVkaWEtbGVmdCI+PGEgaHJlZj0iIyI+IDxpIGNsYXNzPSJmYSBmYS1zaGllbGQiPjwvaT4gPC9hPjwvZGl2Pgo8ZGl2IGNsYXNzPSJtZWRpYS1ib2R5Ij48YSBocmVmPSIjIj5NZWV0IEFsbCBDb21taXRtZW50czwvYT4KPHA+Jm5ic3A7PC9wPgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9Im1lZGlhIj4KPGRpdiBjbGFzcz0ibWVkaWEtbGVmdCI+PGEgaHJlZj0iIyI+IDxpIGNsYXNzPSJmYSBmYS1jb21tZW50cyI+PC9pPiA8L2E+PC9kaXY+CjxkaXYgY2xhc3M9Im1lZGlhLWJvZHkiPjxhIGhyZWY9IiMiPkN1c3RvbWVyIENhcmU8L2E+CjxwPiZuYnNwOzwvcD4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJtZWRpYSI+CjxkaXYgY2xhc3M9Im1lZGlhLWxlZnQiPjxhIGhyZWY9IiMiPiA8aSBjbGFzcz0iZmEgZmEtbW9uZXkiPjwvaT4gPC9hPjwvZGl2Pgo8ZGl2IGNsYXNzPSJtZWRpYS1ib2R5Ij48YSBocmVmPSIjIj5GaW5hbmNpYWwgTWFuYWdlbWVudDwvYT4KPHA+Jm5ic3A7PC9wPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4=', 10, '2020-07-14 09:32:41', '2020-07-14 12:45:08', 1),
(9, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5PdXIgU2VydmljZXM8L2gyPgo8aDQ+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeTwvaDQ+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJwb3J0Zm9saW9faW5uZXJfYXJlYSI+CjxkaXYgY2xhc3M9InBvcnRmb2xpb19maWx0ZXIiPgo8dWw+CjxsaSBjbGFzcz0iYWN0aXZlIiBkYXRhLWZpbHRlcj0iKiI+PGE+IEFsbDwvYT48L2xpPgo8bGkgZGF0YS1maWx0ZXI9Ii5waG90b2dyYXBoeSI+PGE+QVJDSElURUNUVVJFPC9hPjwvbGk+CjxsaSBkYXRhLWZpbHRlcj0iLmJyYW5kaW5nIj48YT5CdWlsZGluZzwvYT48L2xpPgo8bGkgZGF0YS1maWx0ZXI9Ii53ZWJkZXNpZ24iPjxhPkNPTlNUUlVDVElPTjwvYT48L2xpPgo8bGkgZGF0YS1maWx0ZXI9Ii5hZHZlcnN0aW5nIj48YT5ERVNJR048L2E+PC9saT4KPGxpIGRhdGEtZmlsdGVyPSIucGFpbnRpbmciPjxhPlBhaW50aW5nPC9hPjwvbGk+CjwvdWw+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJwb3J0Zm9saW9faXRlbSI+CjxkaXYgY2xhc3M9ImdyaWQtc2l6ZXIiPiZuYnNwOzwvZGl2Pgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllcyBjb2wteHMtNCBwMCBwYWludGluZyBwaG90b2dyYXBoeSBhZHZlcnN0aW5nIj4KPGRpdiBjbGFzcz0ic2luZ2xlX2ZhY2lsaXRpZXNfaW5uZXIiPjxpbWcgc3JjPSJpbWFnZXMvZ2FsbGVyeS9zdi0xLmpwZyIgYWx0PSIiPgo8ZGl2IGNsYXNzPSJnYWxsZXJ5X2hvdmVyIj4KPGg0PkNvbnN0cnVjdGlvbjwvaDQ+Cjx1bD4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1saW5rIj48L2k+PC9hPjwvbGk+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtc2VhcmNoIj48L2k+PC9hPjwvbGk+CjwvdWw+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzIGNvbC14cy00IHAwIHdlYmRlc2lnbiI+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzX2lubmVyIj48aW1nIHNyYz0iaW1hZ2VzL2dhbGxlcnkvc3YtMi5qcGciIGFsdD0iIj4KPGRpdiBjbGFzcz0iZ2FsbGVyeV9ob3ZlciI+CjxoND5Db25zdHJ1Y3Rpb248L2g0Pgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGluayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXNlYXJjaCI+PC9pPjwvYT48L2xpPgo8L3VsPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllcyBjb2wteHMtNCBwYWludGluZyBwMCBwaG90b2dyYXBoeSBicmFuZGluZyI+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzX2lubmVyIj48aW1nIHNyYz0iaW1hZ2VzL2dhbGxlcnkvc3YtMy5qcGciIGFsdD0iIj4KPGRpdiBjbGFzcz0iZ2FsbGVyeV9ob3ZlciI+CjxoND5Db25zdHJ1Y3Rpb248L2g0Pgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGluayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXNlYXJjaCI+PC9pPjwvYT48L2xpPgo8L3VsPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllcyBjb2wteHMtNCBwMCBhZHZlcnN0aW5nIHdlYmRlc2lnbiBhZHZlcnN0aW5nIj4KPGRpdiBjbGFzcz0ic2luZ2xlX2ZhY2lsaXRpZXNfaW5uZXIiPjxpbWcgc3JjPSJpbWFnZXMvZ2FsbGVyeS9zdi00LmpwZyIgYWx0PSIiPgo8ZGl2IGNsYXNzPSJnYWxsZXJ5X2hvdmVyIj4KPGg0PkNvbnN0cnVjdGlvbjwvaDQ+Cjx1bD4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1saW5rIj48L2k+PC9hPjwvbGk+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtc2VhcmNoIj48L2k+PC9hPjwvbGk+CjwvdWw+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzIGNvbC14cy00IHAwIHBhaW50aW5nIGFkdmVyc3RpbmcgYnJhbmRpbmciPgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllc19pbm5lciI+PGltZyBzcmM9ImltYWdlcy9nYWxsZXJ5L3N2LTUuanBnIiBhbHQ9IiI+CjxkaXYgY2xhc3M9ImdhbGxlcnlfaG92ZXIiPgo8aDQ+Q29uc3RydWN0aW9uPC9oND4KPHVsPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLWxpbmsiPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1zZWFyY2giPjwvaT48L2E+PC9saT4KPC91bD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0ic2luZ2xlX2ZhY2lsaXRpZXMgY29sLXhzLTQgcDAgd2ViZGVzaWduIHBob3RvZ3JhcGh5IG1hZ2F6aW5lIGFkdmVyc3RpbmciPgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllc19pbm5lciI+PGltZyBzcmM9ImltYWdlcy9nYWxsZXJ5L3N2LTYuanBnIiBhbHQ9IiI+CjxkaXYgY2xhc3M9ImdhbGxlcnlfaG92ZXIiPgo8aDQ+Q29uc3RydWN0aW9uPC9oND4KPHVsPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLWxpbmsiPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1zZWFyY2giPjwvaT48L2E+PC9saT4KPC91bD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pg==', 11, '2020-07-14 13:05:06', NULL, 1),
(10, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5PdXIgU2VydmljZXM8L2gyPgo8aDQ+V2UgYXJlIGEgZ3JvdXAgb2YgZXhwZXJ0cyBmb3IgYWxsIHR5cGVzIG9mIHByb2plY3RzIGluIHNlcnZpY2VzIG1lbnRpb25lZCBhYm92ZSBoZW5jZSBvZmZlcmluZyBpbnRlcmRpc2NpcGxpbmFyeSAmYW1wOyB0ZWNobmljYWwgY29tcGxldGUgc29sdXRpb25zPC9oND4KPC9kaXY+CjxkaXYgY2xhc3M9InBvcnRmb2xpb19pbm5lcl9hcmVhIj4KPGRpdiBjbGFzcz0icG9ydGZvbGlvX2ZpbHRlciI+Cjx1bD4KPGxpIGNsYXNzPSJhY3RpdmUiIGRhdGEtZmlsdGVyPSIqIj48YT4gQWxsPC9hPjwvbGk+CjxsaSBkYXRhLWZpbHRlcj0iLnBob3RvZ3JhcGh5Ij48YT5FbGVjdHJpY2FsPC9hPjwvbGk+CjxsaSBkYXRhLWZpbHRlcj0iLmJyYW5kaW5nIj48YT5NZWNoYW5pYzwvYT48L2xpPgo8bGkgZGF0YS1maWx0ZXI9Ii53ZWJkZXNpZ24iPjxhPkNvbnN0cnVjdGlvbjwvYT48L2xpPgo8bGkgZGF0YS1maWx0ZXI9Ii5hZHZlcnN0aW5nIj48YT5SZXRhaWwgQWR2aXNvcnk8L2E+PC9saT4KPC91bD4KPC9kaXY+CjxkaXYgY2xhc3M9InBvcnRmb2xpb19pdGVtIj4KPGRpdiBjbGFzcz0iZ3JpZC1zaXplciI+Jm5ic3A7PC9kaXY+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzIGNvbC14cy00IHAwIHBob3RvZ3JhcGh5Ij4KPGRpdiBjbGFzcz0ic2luZ2xlX2ZhY2lsaXRpZXNfaW5uZXIiPjxpbWcgc3R5bGU9ImhlaWdodDogMzUwcHg7IHdpZHRoOiAxMDAlOyIgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zdi0xLmpwZyIgYWx0PSIiPgo8ZGl2IGNsYXNzPSJnYWxsZXJ5X2hvdmVyIj4KPGg0PkVsZWN0cmljYWw8L2g0Pgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGluayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXNlYXJjaCI+PC9pPjwvYT48L2xpPgo8L3VsPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllcyBjb2wteHMtNCBwMCBwaG90b2dyYXBoeSI+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzX2lubmVyIj48aW1nIHN0eWxlPSJoZWlnaHQ6IDM1MHB4OyB3aWR0aDogMTAwJTsiIHNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvc3YtMi5qcGciIGFsdD0iIj4KPGRpdiBjbGFzcz0iZ2FsbGVyeV9ob3ZlciI+CjxoND5NZWNoYW5pYzwvaDQ+Cjx1bD4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1saW5rIj48L2k+PC9hPjwvbGk+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtc2VhcmNoIj48L2k+PC9hPjwvbGk+CjwvdWw+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzIGNvbC14cy00IHBob3RvZ3JhcGh5Ij4KPGRpdiBjbGFzcz0ic2luZ2xlX2ZhY2lsaXRpZXNfaW5uZXIiPjxpbWcgc3R5bGU9ImhlaWdodDogMzUwcHg7IHdpZHRoOiAxMDAlOyIgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy9zdi0zLmpwZyIgYWx0PSIiPgo8ZGl2IGNsYXNzPSJnYWxsZXJ5X2hvdmVyIj4KPGg0PkNvbnN0cnVjdGlvbjwvaDQ+Cjx1bD4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1saW5rIj48L2k+PC9hPjwvbGk+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtc2VhcmNoIj48L2k+PC9hPjwvbGk+CjwvdWw+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzIGNvbC14cy00IHAwIHdlYmRlc2lnbiI+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzX2lubmVyIj48aW1nIHN0eWxlPSJoZWlnaHQ6IDM1MHB4OyB3aWR0aDogMTAwJTsiIHNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvc3YtNC5qcGciIGFsdD0iIj4KPGRpdiBjbGFzcz0iZ2FsbGVyeV9ob3ZlciI+CjxoND5Db25zdHJ1Y3Rpb248L2g0Pgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGluayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXNlYXJjaCI+PC9pPjwvYT48L2xpPgo8L3VsPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllcyBjb2wteHMtNCBwMCBwaG90b2dyYXBoeSI+CjxkaXYgY2xhc3M9InNpbmdsZV9mYWNpbGl0aWVzX2lubmVyIj48aW1nIHN0eWxlPSJoZWlnaHQ6IDM1MHB4OyB3aWR0aDogMTAwJTsiIHNyYz0icHVibGljL2ltcG9ydC9pbWFnZXMvc3YtNS5qcGciIGFsdD0iIj4KPGRpdiBjbGFzcz0iZ2FsbGVyeV9ob3ZlciI+CjxoND5SZXRhaWwgQWR2aXNvcnk8L2g0Pgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGluayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXNlYXJjaCI+PC9pPjwvYT48L2xpPgo8L3VsPgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllcyBjb2wteHMtNCBwMCB3ZWJkZXNpZ24iPgo8ZGl2IGNsYXNzPSJzaW5nbGVfZmFjaWxpdGllc19pbm5lciI+PGltZyBzdHlsZT0iaGVpZ2h0OiAzNTBweDsgd2lkdGg6IDEwMCU7IiBzcmM9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL3N2LTYuanBnIiBhbHQ9IiI+CjxkaXYgY2xhc3M9ImdhbGxlcnlfaG92ZXIiPgo8aDQ+Q29uc3RydWN0aW9uPC9oND4KPHVsPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLWxpbmsiPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1zZWFyY2giPjwvaT48L2E+PC9saT4KPC91bD4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pg==', 11, '2020-07-14 13:05:11', '2020-07-14 14:33:44', 1),
(11, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5PdXIgVGVhbTwvaDI+CjxoND4mbmJzcDs8L2g0Pgo8L2Rpdj4KPGRpdiBjbGFzcz0icm93IHRlYW1fcm93Ij4KPGRpdiBjbGFzcz0iY29sLW1kLTMgY29sLXNtLTYgd293IGZhZGVJblVwIj4KPGRpdiBjbGFzcz0idGVhbV9tZW1iYXIiPjxpbWcgc3R5bGU9ImhlaWdodDogMzAwcHg7IHdpZHRoOiAxMDAlOyIgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy90bS0xLmpwZyIgYWx0PSIiPgo8ZGl2IGNsYXNzPSJ0ZWFtX2NvbnRlbnQiPgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtZmFjZWJvb2siPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS10d2l0dGVyIj48L2k+PC9hPjwvbGk+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGlua2VkaW4iPjwvaT48L2E+PC9saT4KPC91bD4KPGEgY2xhc3M9Im5hbWUiIGhyZWY9IiMiPkJSSUFOIEtBU09aSTxicj48L2E+CjxoNj5WUCBQcm9qZWN0czwvaDY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC1tZC0zIGNvbC1zbS02IHdvdyBmYWRlSW5VcCIgZGF0YS13b3ctZGVsYXk9IjAuMnMiPgo8ZGl2IGNsYXNzPSJ0ZWFtX21lbWJhciI+PGltZyBzdHlsZT0iaGVpZ2h0OiAzMDBweDsgd2lkdGg6IDEwMCU7IiBzcmM9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL3RtLTIuanBnIiBhbHQ9IiI+CjxkaXYgY2xhc3M9InRlYW1fY29udGVudCI+Cjx1bD4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1mYWNlYm9vayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXR3aXR0ZXIiPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1saW5rZWRpbiI+PC9pPjwvYT48L2xpPgo8L3VsPgo8YSBjbGFzcz0ibmFtZSIgaHJlZj0iIyI+Q0VDSUxJQSBLQUtPPGJyPjwvYT4KPGg2PlZQIE9wZXJhdGlvbnM8L2g2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtbWQtMyBjb2wtc20tNiB3b3cgZmFkZUluVXAiIGRhdGEtd293LWRlbGF5PSIwLjNzIj4KPGRpdiBjbGFzcz0idGVhbV9tZW1iYXIiPjxpbWcgc3R5bGU9ImhlaWdodDogMzAwcHg7IHdpZHRoOiAxMDAlOyIgc3JjPSJwdWJsaWMvaW1wb3J0L2ltYWdlcy90bS0zLmpwZyIgYWx0PSIiPgo8ZGl2IGNsYXNzPSJ0ZWFtX2NvbnRlbnQiPgo8dWw+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtZmFjZWJvb2siPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS10d2l0dGVyIj48L2k+PC9hPjwvbGk+CjxsaT48YSBocmVmPSIjIj48aSBjbGFzcz0iZmEgZmEtbGlua2VkaW4iPjwvaT48L2E+PC9saT4KPC91bD4KPGEgY2xhc3M9Im5hbWUiIGhyZWY9IiMiPkNIUklTVE9QSEVSIEtBWU9OR088YnI+PC9hPgo8aDY+VlAgRmluYW5jZTwvaDY+CjwvZGl2Pgo8L2Rpdj4KPC9kaXY+CjxkaXYgY2xhc3M9ImNvbC1tZC0zIGNvbC1zbS02IHdvdyBmYWRlSW5VcCIgZGF0YS13b3ctZGVsYXk9IjAuNHMiPgo8ZGl2IGNsYXNzPSJ0ZWFtX21lbWJhciI+PGltZyBzdHlsZT0iaGVpZ2h0OiAzMDBweDsgd2lkdGg6IDEwMCU7IiBzcmM9InB1YmxpYy9pbXBvcnQvaW1hZ2VzL3RtLTQuanBnIiBhbHQ9IiI+CjxkaXYgY2xhc3M9InRlYW1fY29udGVudCI+Cjx1bD4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1mYWNlYm9vayI+PC9pPjwvYT48L2xpPgo8bGk+PGEgaHJlZj0iIyI+PGkgY2xhc3M9ImZhIGZhLXR3aXR0ZXIiPjwvaT48L2E+PC9saT4KPGxpPjxhIGhyZWY9IiMiPjxpIGNsYXNzPSJmYSBmYS1saW5rZWRpbiI+PC9pPjwvYT48L2xpPgo8L3VsPgo8YSBjbGFzcz0ibmFtZSIgaHJlZj0iIyI+SVZBTiBMVVVUVTwvYT4KPGg2PlByb2plY3RzIE1hbmFnZXI8L2g2Pgo8L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4=', 12, '2020-07-14 14:47:43', '2020-07-14 14:59:44', 1),
(12, 'PGRpdiBjbGFzcz0idGl0dGxlIHdvdyBmYWRlSW5VcCI+CjxoMj5PdXIgQWNoaWV2bWVudHM8L2gyPgo8aDQ+Jm5ic3A7PC9oND4KPC9kaXY+CjxkaXYgY2xhc3M9ImFjaGlldm1lbnRzX3JvdyByb3ciPgo8ZGl2IGNsYXNzPSJjb2wtbWQtNCBjb2wtc20tMTIgcDAgY29tcGxldGVkIj48aSBjbGFzcz0iZmEgZmEtY29ubmVjdGRldmVsb3AiPjwvaT4gPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjUwPC9zcGFuPgo8aDY+UFJPSkVDVCBDT01QTEVURUQ8L2g2Pgo8L2Rpdj4KPGRpdiBjbGFzcz0iY29sLW1kLTQgY29sLXNtLTEyIHAwIGNvbXBsZXRlZCI+PGkgY2xhc3M9ImZhIGZhLWNoaWxkIj48L2k+IDxzcGFuIGNsYXNzPSJjb3VudGVyIj4yNTwvc3Bhbj4KPGg2PkhhcHB5IENsaWVudDwvaDY+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtbWQtNCBjb2wtc20tMTIgcDAgY29tcGxldGVkIj48aSBjbGFzcz0iZmEgZmEtY2FydC1wbHVzIj48L2k+IDxzcGFuIGNsYXNzPSJjb3VudGVyIj4xMDwvc3Bhbj4KPGg2PlJldGFpbCBBZHZpc29yeTwvaDY+CjwvZGl2Pgo8L2Rpdj4=', 13, '2020-07-14 15:17:25', '2020-07-14 15:19:38', 1),
(13, 'PGRpdiBjbGFzcz0iYm9va19ub3dfYWVyYSI+CjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CjxkaXYgY2xhc3M9InJvdyBib29rX25vdyI+CjxkaXYgY2xhc3M9ImNvbC1tZC0xMCBib29raW5nX3RleHQiPgo8aDQ+R2V0IGEgcXVvdGF0aW9uIG5vdy48L2g0Pgo8cD5CUllDSyBJbnZlc3RtZW50cyBpcyBhIHNlcnZpY2UgY29tcGFueSBsb29raW5nIHRvd2FyZHMgdGhlIGZ1dHVyZSBpbiBjaGFuZ2luZyB0aGUgZmFjZSBvZiB0aGUgc2VydmljZSBpbmR1c3RyeSBpbiBVZ2FuZGEuIC48L3A+CjwvZGl2Pgo8ZGl2IGNsYXNzPSJjb2wtbWQtMiBwMCBib29rX2JvdHR1biI+PGEgY2xhc3M9ImJ1dHRvbl9hbGwiIGhyZWY9IiMiPkdldCBRdW90ZTwvYT48L2Rpdj4KPC9kaXY+CjwvZGl2Pgo8L2Rpdj4=', 14, '2020-07-14 15:39:26', '2020-07-14 15:42:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `configurationsetting`
--

CREATE TABLE `configurationsetting` (
  `id` int(11) NOT NULL,
  `systemName` varchar(50) NOT NULL,
  `systemValue` varchar(250) DEFAULT NULL,
  `mask` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `configurationsetting`
--

INSERT INTO `configurationsetting` (`id`, `systemName`, `systemValue`, `mask`) VALUES
(12, 'Company Name', 'Service On', 1),
(13, 'Company logo', 'logox.jpeg', 1),
(14, 'address', 'Bukerere Road, Seeta, P.O. Box 8755 Kampala, Uganda', 1),
(20, 'app Name', 'ServiceOn', 1),
(22, 'company contact', '+256-756-270818 +256-776-270818', 1),
(23, 'company email', 'customersupport@bryckinvestments.com', 1),
(24, 'Working Hours', 'Mon - Sat 08:00 am - 05:00 pm', 1),
(25, 'facebook', 'https://web.facebook.com/bryckinvestments/', 1),
(26, 'twitter', 'https://twitter.com/Bryck_BI', 1),
(27, 'LinkedIn', 'https://www.linkedin.com/groups8938082', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contactdetail`
--

CREATE TABLE `contactdetail` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` varchar(150) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `creationDate` datetime DEFAULT current_timestamp(),
  `isActive` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `firstName`, `lastName`, `contact`, `email`, `creationDate`, `isActive`) VALUES
('', 'Christ world church', NULL, '0781587081', 'james2yiga@gmail.com', '2020-06-17 18:32:47', NULL),
('0002', 'Christ world church', NULL, '0781587082', 'james2yiga@gmail.com', '2020-06-17 18:47:18', NULL),
('0003', 'Christ world church', NULL, '0781587084', 'james2yiga@gmail.com', '2020-06-17 18:53:46', NULL),
('0004', 'Christ world church', NULL, '0774173148', 'james2yiga@gmail.com', '2020-06-17 19:01:58', NULL),
('0005', 'Christ world church', NULL, '07819567081', 'james2yiga@gmail.com', '2020-06-17 19:06:03', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customerdeliverypoint`
--

CREATE TABLE `customerdeliverypoint` (
  `id` int(15) NOT NULL,
  `customerId` varchar(150) NOT NULL,
  `placeName` varchar(150) NOT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lng` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customerorder`
--

CREATE TABLE `customerorder` (
  `id` int(15) NOT NULL,
  `sessionId` varchar(150) NOT NULL,
  `orderDate` datetime DEFAULT current_timestamp(),
  `customerId` varchar(15) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `moditifedDate` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerorder`
--

INSERT INTO `customerorder` (`id`, `sessionId`, `orderDate`, `customerId`, `status`, `moditifedDate`) VALUES
(1, '{BFC963AF-2985-AEF1-CEBA-9442F26BE531}', '2020-06-17 18:32:47', '', 'NEW', NULL),
(2, '{BFC963AF-2985-AEF1-CEBA-9442F26BE531}', '2020-06-17 18:47:18', '0002', 'NEW', NULL),
(3, '{BFC963AF-2985-AEF1-CEBA-9442F26BE531}', '2020-06-17 19:01:59', '0004', 'NEW', NULL),
(4, '{BFC963AF-2985-AEF1-CEBA-9442F26BE531}', '2020-06-17 19:06:03', '0005', 'NEW', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dbchgn`
--

CREATE TABLE `dbchgn` (
  `id` int(11) NOT NULL,
  `Name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `entity`
--

CREATE TABLE `entity` (
  `id` int(11) NOT NULL,
  `tableName` varchar(50) NOT NULL,
  `inSync` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `entity`
--

INSERT INTO `entity` (`id`, `tableName`, `inSync`) VALUES
(1, 'Category', 0),
(2, 'item', 1),
(3, 'speckey', 1),
(4, 'spec', 1),
(5, 'itemimage', 1),
(6, 'chat', 1),
(7, 'categorypge', 1),
(8, 'attkey', 1),
(9, 'guitoolbox', 1),
(10, 'attkeyval', 1),
(11, 'theme', 1),
(12, 'themefile', 1),
(13, 'themestyle', 1),
(14, 'imagefile', 1),
(15, 'customer', 1),
(16, 'customerdeliverypoint', 1),
(17, 'customerorder', 1),
(18, 'orderitem', 1),
(19, 'orderdeliverypoint', 1),
(20, 'webpage', 1),
(21, 'webpagesection', 1),
(22, 'sectioncolumn', 1),
(23, 'columncontent', 1),
(24, 'pageresource', 1),
(72, 'activity', 1),
(73, 'cf', 1),
(74, 'codebuilder', 1),
(75, 'configurationsetting', 1),
(76, 'entity', 1),
(77, 'entityfield', 1),
(78, 'entityform', 1),
(79, 'home', 1),
(80, 'itemtemplate', 1),
(81, 'listhandle', 1),
(82, 'rolemanagement', 1),
(83, 'subactivity', 1),
(84, 'systemuser', 1),
(85, 'toolbox', 1),
(86, 'toolboxs', 1),
(87, 'user', 1),
(88, 'useroftype', 1),
(89, 'userpge', 1),
(90, 'usertype', 1),
(91, 'usertyperole', 1),
(92, 'verifycode', 1),
(93, 'businessprofile', 1),
(94, 'contactdetails', 1),
(96, 'productimages', 1),
(97, 'products', 1),
(98, 'requestquote', 1),
(99, 'services', 1),
(100, 'termsandconditions', 1),
(101, 'userdocs', 1),
(102, 'userdoctypes', 1),
(103, 'userterms', 1),
(104, 'vetuser', 1),
(105, 'listingentry', 1),
(106, 'testexp', 1),
(107, 'testxp', 1),
(108, 'dbchgn', 1),
(109, 'page', 1);

-- --------------------------------------------------------

--
-- Table structure for table `entityfield`
--

CREATE TABLE `entityfield` (
  `id` int(11) NOT NULL,
  `fieldName` varchar(150) NOT NULL,
  `fieldType` varchar(150) NOT NULL,
  `fieldLength` int(11) NOT NULL,
  `fieldConstraint` varchar(150) NOT NULL,
  `canBeNull` tinyint(1) NOT NULL,
  `entityId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `entityfield`
--

INSERT INTO `entityfield` (`id`, `fieldName`, `fieldType`, `fieldLength`, `fieldConstraint`, `canBeNull`, `entityId`) VALUES
(1, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 1),
(2, 'categoryName', 'VARCHAR', 50, '', 0, 1),
(3, 'parentId', 'INT', 15, '', 1, 1),
(4, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 2),
(5, 'itemName', 'VARCHAR', 150, '', 0, 2),
(6, 'itemDescription', ' TEXT', 0, '', 1, 2),
(7, 'creationDate', 'DATETIME', 0, 'DEFAULT CURRENT_TIMESTAMP', 0, 2),
(8, 'ModifiedDate', 'DATETIME', 0, 'ON UPDATE CURRENT_TIMESTAMP', 1, 2),
(9, 'isActive', 'INT', 1, '', 1, 2),
(10, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 3),
(11, 'specText', 'VARCHAR', 150, '', 0, 3),
(12, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 4),
(13, 'specKeyId', 'INT', 15, '', 0, 4),
(14, 'specValue', 'VARCHAR', 150, '', 0, 4),
(15, 'id', 'INT', 15, '', 0, 5),
(16, 'filename', 'VARCHAR', 255, '', 0, 5),
(17, 'isActive', 'INT', 1, '', 1, 5),
(18, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 6),
(19, 'sessionId', 'VARCHAR', 150, '', 0, 6),
(20, 'itemId', 'INT', 15, '', 0, 6),
(21, 'qty', 'INT', 15, '', 0, 6),
(22, 'isActive', 'INT', 1, '', 1, 6),
(23, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 7),
(24, 'categoryId', 'INT', 15, '', 0, 7),
(25, 'fileName', 'VARCHAR', 150, '', 0, 7),
(26, 'filePath', 'VARCHAR', 250, '', 0, 7),
(27, 'creationDate', 'DATE', 0, '', 0, 7),
(28, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 8),
(29, 'attName', 'VARCHAR', 150, '', 0, 8),
(31, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 9),
(32, 'guiToolName', 'VARCHAR', 150, '', 0, 9),
(33, 'openTag', 'VARCHAR', 150, '', 0, 9),
(34, 'closeTag', 'VARCHAR', 150, '', 1, 9),
(35, 'dispayHtml', 'VARCHAR', 250, '', 1, 9),
(36, 'defaultClass', 'VARCHAR', 250, '', 1, 9),
(37, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 10),
(38, 'guiToolId', 'INT', 15, '', 0, 10),
(39, 'attKeyId', 'INT', 15, '', 0, 10),
(40, 'attVal', 'VARCHAR', 150, '', 0, 10),
(41, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 11),
(42, 'themeName', 'VARCHAR', 150, '', 0, 11),
(43, 'isDefault', 'INT', 1, '', 1, 11),
(44, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 12),
(45, 'file', 'VARCHAR', 250, '', 0, 12),
(46, 'fileType', 'VARCHAR', 50, '', 0, 12),
(47, 'extractable', 'INT', 1, '', 0, 12),
(48, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 13),
(49, 'attName', 'VARCHAR', 150, '', 0, 13),
(50, 'attType', 'VARCHAR', 150, '', 0, 13),
(51, 'themeId', 'VARCHAR', 15, '', 0, 13),
(52, 'themeId', 'INT', 15, '', 0, 12),
(53, 'categoryId', 'INT', 15, '', 0, 2),
(54, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 14),
(55, 'itemId', 'INT', 15, '', 0, 14),
(56, 'path', 'VARCHAR', 250, '', 0, 14),
(57, 'isActive', 'INT', 1, '', 0, 14),
(58, 'amount', 'FLOAT', 15, '', 0, 2),
(59, 'uom', 'VARCHAR', 120, '', 0, 2),
(60, 'id', 'VARCHAR', 150, 'PK', 0, 15),
(61, 'firstName', 'VARCHAR', 50, '', 1, 15),
(62, 'lastName', 'VARCHAR', 50, '', 1, 15),
(63, 'contact', 'VARCHAR', 50, '', 0, 15),
(64, 'email', 'VARCHAR', 150, '', 0, 15),
(65, 'creationDate', 'DATETIME', 0, 'DEFAULT CURRENT_TIMESTAMP', 1, 15),
(66, 'isActive', 'INT', 1, '', 1, 15),
(67, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 16),
(68, 'customerId', 'VARCHAR', 150, '', 0, 16),
(69, 'placeName', 'VARCHAR', 150, '', 0, 16),
(70, 'lat', 'VARCHAR', 50, '', 1, 16),
(71, 'lng', 'VARCHAR', 50, '', 1, 16),
(72, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 17),
(73, 'sessionId', 'VARCHAR', 150, '', 0, 17),
(74, 'orderDate', 'DATETIME', 0, 'DEFAULT CURRENT_TIMESTAMP', 1, 17),
(75, 'customerId', 'VARCHAR', 15, '', 0, 17),
(76, 'status', 'VARCHAR', 10, '', 1, 17),
(77, 'moditifedDate', 'DATETIME', 0, 'ON UPDATE CURRENT_TIMESTAMP', 1, 17),
(78, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 18),
(79, 'orderId', 'INT', 15, '', 0, 18),
(80, 'itemId', 'INT', 15, '', 0, 18),
(81, 'qty', 'INT', 15, '', 0, 18),
(82, 'id', 'INT', 15, '', 0, 19),
(83, 'orderId', 'INT', 15, '', 0, 19),
(84, 'deliveryPointId', 'INT', 15, '', 0, 19),
(85, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 20),
(86, 'namepge', 'VARCHAR', 150, '', 0, 20),
(87, 'parentId', 'INT', 1, '', 1, 20),
(88, 'orderIndex', 'INT', 5, '', 0, 20),
(89, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 21),
(90, 'sectionName', 'VARCHAR', 150, '', 0, 21),
(91, 'positionIndex', 'INT', 5, '', 0, 21),
(92, 'columnNo', 'INT', 2, '', 0, 21),
(93, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 22),
(94, 'columnNm', 'VARCHAR', 150, '', 0, 22),
(95, 'sectionId', 'INT', 15, '', 0, 22),
(96, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 23),
(97, 'contextContent', 'VARCHAR', 250, '', 0, 23),
(98, 'columnId', 'INT', 15, '', 0, 23),
(99, 'creationDate', 'DATETIME', 0, 'DEFAULT CURRENT_TIMESTAMP', 1, 23),
(100, 'modificationDate', 'DATETIME', 0, 'ON UPDATE CURRENT_TIMESTAMP', 1, 23),
(101, 'isActive', 'INT', 1, '', 1, 23),
(102, 'id', 'INT', 15, 'AUTO_INCREMENT', 0, 24),
(103, 'resourcepath', 'VARCHAR', 350, '', 0, 24),
(104, 'resourceType', 'VARCHAR', 15, '', 1, 24),
(105, 'showPge', 'INT', 1, '', 1, 20),
(106, 'pgeId', 'INT', 15, '', 0, 21),
(107, 'columnCls', 'VARCHAR', 150, '', 0, 22),
(108, 'id', 'int', 0, '', 0, 27),
(109, 'id', 'int', 0, '', 0, 28),
(110, 'id', 'int', 0, 'auto_increment', 0, 29),
(111, 'systemName', 'varchar', 0, 'auto_increment', 0, 29),
(112, 'systemValue', 'varchar', 0, 'auto_increment', 1, 29),
(113, 'mask', 'int', 0, 'auto_increment', 0, 29),
(114, 'id', 'int', 0, 'auto_increment', 0, 30),
(115, 'tableName', 'varchar', 0, 'auto_increment', 0, 30),
(116, 'inSync', 'tinyint', 0, 'auto_increment', 0, 30),
(117, 'id', 'int', 0, 'auto_increment', 0, 31),
(118, 'fieldName', 'varchar', 0, 'auto_increment', 0, 31),
(119, 'fieldType', 'varchar', 0, 'auto_increment', 0, 31),
(120, 'fieldLength', 'int', 0, 'auto_increment', 0, 31),
(121, 'fieldConstraint', 'varchar', 0, 'auto_increment', 0, 31),
(122, 'canBeNull', 'tinyint', 0, 'auto_increment', 0, 31),
(123, 'entityId', 'int', 0, 'auto_increment', 0, 31),
(124, 'colName', 'varchar', 0, '', 0, 32),
(125, 'controlName', 'varchar', 0, '', 1, 32),
(126, 'labelName', 'varchar', 0, '', 0, 32),
(127, 'url', 'varchar', 0, '', 1, 32),
(128, 'txtVal', 'varchar', 0, '', 1, 32),
(129, 'valval', 'varchar', 0, '', 1, 32),
(130, 'isActive', 'int', 0, '', 1, 32),
(131, 'tableNme', 'varchar', 0, '', 0, 32),
(132, 'orderIn', 'int', 0, '', 1, 32),
(133, 'positionIn', 'int', 0, '', 1, 32),
(134, 'isRequired', 'tinyint', 0, '', 0, 32),
(135, 'id', 'int', 0, '', 0, 33),
(136, 'id', 'int', 0, 'auto_increment', 0, 34),
(137, 'itemName', 'varchar', 0, 'auto_increment', 0, 34),
(138, 'itemDescription', 'varchar', 0, 'auto_increment', 1, 34),
(139, 'id', 'int', 0, 'auto_increment', 0, 35),
(140, 'idVal', 'varchar', 0, 'auto_increment', 0, 35),
(141, 'textVal', 'varchar', 0, 'auto_increment', 0, 35),
(142, 'listName', 'varchar', 0, 'auto_increment', 0, 35),
(143, 'id', 'int', 0, 'auto_increment', 0, 36),
(144, 'roleId', 'int', 0, 'auto_increment', 0, 36),
(145, 'userId', 'varchar', 0, 'auto_increment', 0, 36),
(146, 'id', 'int', 0, 'auto_increment', 0, 37),
(147, 'name', 'varchar', 0, 'auto_increment', 0, 37),
(148, 'link', 'varchar', 0, 'auto_increment', 1, 37),
(149, 'icon', 'varchar', 0, 'auto_increment', 1, 37),
(150, 'activityId', 'int', 0, 'auto_increment', 0, 37),
(151, 'isActive', 'tinyint', 0, 'auto_increment', 1, 37),
(152, 'orderIndex', 'int', 0, 'auto_increment', 1, 37),
(153, 'id', 'varchar', 0, '', 0, 38),
(154, 'firstName', 'varchar', 0, '', 0, 38),
(155, 'lastName', 'varchar', 0, '', 0, 38),
(156, 'dob', 'date', 0, '', 0, 38),
(157, 'contact', 'varchar', 0, '', 1, 38),
(158, 'email', 'varchar', 0, '', 1, 38),
(159, 'isActive', 'tinyint', 0, '', 1, 38),
(160, 'username', 'varchar', 0, '', 1, 38),
(161, 'password', 'varchar', 0, '', 1, 38),
(162, 'id', 'int', 0, 'auto_increment', 0, 39),
(163, 'toolboxName', 'varchar', 0, 'auto_increment', 0, 39),
(164, 'id', 'int', 0, 'auto_increment', 0, 40),
(165, 'toolboxName', 'varchar', 0, 'auto_increment', 0, 40),
(166, 'id', 'varchar', 0, '', 0, 41),
(167, 'firstName', 'varchar', 0, '', 0, 41),
(168, 'lastName', 'varchar', 0, '', 0, 41),
(169, 'mobileNumber', 'varchar', 0, '', 0, 41),
(170, 'email', 'varchar', 0, '', 1, 41),
(171, 'creationDate', 'datetime', 0, '', 0, 41),
(172, 'statusId', 'int', 0, '', 1, 41),
(173, 'userId', 'varchar', 0, '', 0, 42),
(174, 'userTypeId', 'int', 0, '', 0, 42),
(175, 'isActive', 'tinyint', 0, '', 0, 42),
(176, 'id', 'varchar', 0, '', 0, 43),
(177, 'folder', 'varchar', 0, '', 0, 43),
(178, 'image', 'int', 0, '', 0, 43),
(179, 'isactive', 'tinyint', 0, '', 0, 43),
(180, 'id', 'int', 0, 'auto_increment', 0, 44),
(181, 'userTypeName', 'varchar', 0, 'auto_increment', 0, 44),
(182, 'isActive', 'tinyint', 0, 'auto_increment', 0, 44),
(183, 'id', 'int', 0, 'auto_increment', 0, 45),
(184, 'userTypeId', 'int', 0, 'auto_increment', 0, 45),
(185, 'subActivityId', 'int', 0, 'auto_increment', 0, 45),
(186, 'isActive', 'tinyint', 0, 'auto_increment', 0, 45),
(187, 'creationDate', 'datetime', 0, 'auto_increment', 0, 45),
(188, 'id', 'int', 0, 'auto_increment', 0, 46),
(189, 'userId', 'varchar', 0, 'auto_increment', 0, 46),
(190, 'code', 'varchar', 0, 'auto_increment', 0, 46),
(191, 'isActive', 'tinyint', 0, 'auto_increment', 0, 46),
(192, 'creationDate', 'datetime', 0, 'auto_increment', 0, 46),
(193, 'verificationDate', 'datetime', 0, 'on update current_timestamp()', 1, 46),
(194, 'id', 'int', 0, 'auto_increment', 0, 47),
(195, 'name', 'varchar', 0, '', 1, 47),
(196, 'indexOrder', 'int', 0, '', 0, 47),
(197, 'isActive', 'tinyint', 0, '', 1, 47),
(198, 'id', 'int', 0, '', 0, 48),
(199, 'id', 'int', 0, '', 0, 49),
(200, 'id', 'int', 0, 'auto_increment', 0, 50),
(201, 'systemName', 'varchar', 0, '', 0, 50),
(202, 'systemValue', 'varchar', 0, '', 1, 50),
(203, 'mask', 'int', 0, '', 0, 50),
(204, 'id', 'int', 0, 'auto_increment', 0, 51),
(205, 'tableName', 'varchar', 0, '', 0, 51),
(206, 'inSync', 'tinyint', 0, '', 0, 51),
(207, 'id', 'int', 0, 'auto_increment', 0, 52),
(208, 'fieldName', 'varchar', 0, '', 0, 52),
(209, 'fieldType', 'varchar', 0, '', 0, 52),
(210, 'fieldLength', 'int', 0, '', 0, 52),
(211, 'fieldConstraint', 'varchar', 0, '', 0, 52),
(212, 'canBeNull', 'tinyint', 0, '', 0, 52),
(213, 'entityId', 'int', 0, '', 0, 52),
(214, 'colName', 'varchar', 0, '', 0, 53),
(215, 'controlName', 'varchar', 0, '', 1, 53),
(216, 'labelName', 'varchar', 0, '', 0, 53),
(217, 'url', 'varchar', 0, '', 1, 53),
(218, 'txtVal', 'varchar', 0, '', 1, 53),
(219, 'valval', 'varchar', 0, '', 1, 53),
(220, 'isActive', 'int', 0, '', 1, 53),
(221, 'tableNme', 'varchar', 0, '', 0, 53),
(222, 'orderIn', 'int', 0, '', 1, 53),
(223, 'positionIn', 'int', 0, '', 1, 53),
(224, 'isRequired', 'tinyint', 0, '', 0, 53),
(225, 'id', 'int', 0, '', 0, 54),
(226, 'id', 'int', 0, 'auto_increment', 0, 55),
(227, 'itemName', 'varchar', 0, '', 0, 55),
(228, 'itemDescription', 'varchar', 0, '', 1, 55),
(229, 'id', 'int', 0, 'auto_increment', 0, 56),
(230, 'idVal', 'varchar', 0, '', 0, 56),
(231, 'textVal', 'varchar', 0, '', 0, 56),
(232, 'listName', 'varchar', 0, '', 0, 56),
(233, 'id', 'int', 0, 'auto_increment', 0, 57),
(234, 'roleId', 'int', 0, '', 0, 57),
(235, 'userId', 'varchar', 0, '', 0, 57),
(236, 'id', 'int', 0, 'auto_increment', 0, 58),
(237, 'name', 'varchar', 0, '', 0, 58),
(238, 'link', 'varchar', 0, '', 1, 58),
(239, 'icon', 'varchar', 0, '', 1, 58),
(240, 'activityId', 'int', 0, '', 0, 58),
(241, 'isActive', 'tinyint', 0, '', 1, 58),
(242, 'orderIndex', 'int', 0, '', 1, 58),
(243, 'id', 'varchar', 0, '', 0, 59),
(244, 'firstName', 'varchar', 0, '', 0, 59),
(245, 'lastName', 'varchar', 0, '', 0, 59),
(246, 'dob', 'date', 0, '', 0, 59),
(247, 'contact', 'varchar', 0, '', 1, 59),
(248, 'email', 'varchar', 0, '', 1, 59),
(249, 'isActive', 'tinyint', 0, '', 1, 59),
(250, 'username', 'varchar', 0, '', 1, 59),
(251, 'password', 'varchar', 0, '', 1, 59),
(252, 'id', 'int', 0, 'auto_increment', 0, 60),
(253, 'toolboxName', 'varchar', 0, '', 0, 60),
(254, 'id', 'int', 0, 'auto_increment', 0, 61),
(255, 'toolboxName', 'varchar', 0, '', 0, 61),
(256, 'id', 'varchar', 0, '', 0, 62),
(257, 'firstName', 'varchar', 0, '', 0, 62),
(258, 'lastName', 'varchar', 0, '', 0, 62),
(259, 'mobileNumber', 'varchar', 0, '', 0, 62),
(260, 'email', 'varchar', 0, '', 1, 62),
(261, 'creationDate', 'datetime', 0, '', 0, 62),
(262, 'statusId', 'int', 0, '', 1, 62),
(263, 'userId', 'varchar', 0, '', 0, 63),
(264, 'userTypeId', 'int', 0, '', 0, 63),
(265, 'isActive', 'tinyint', 0, '', 0, 63),
(266, 'id', 'varchar', 0, '', 0, 64),
(267, 'folder', 'varchar', 0, '', 0, 64),
(268, 'image', 'int', 0, '', 0, 64),
(269, 'isactive', 'tinyint', 0, '', 0, 64),
(270, 'id', 'int', 0, 'auto_increment', 0, 65),
(271, 'userTypeName', 'varchar', 0, '', 0, 65),
(272, 'isActive', 'tinyint', 0, '', 0, 65),
(273, 'id', 'int', 0, 'auto_increment', 0, 66),
(274, 'userTypeId', 'int', 0, '', 0, 66),
(275, 'subActivityId', 'int', 0, '', 0, 66),
(276, 'isActive', 'tinyint', 0, '', 0, 66),
(277, 'creationDate', 'datetime', 0, '', 0, 66),
(278, 'id', 'int', 0, 'auto_increment', 0, 67),
(279, 'userId', 'varchar', 0, '', 0, 67),
(280, 'code', 'varchar', 0, '', 0, 67),
(281, 'isActive', 'tinyint', 0, '', 0, 67),
(282, 'creationDate', 'datetime', 0, '', 0, 67),
(283, 'verificationDate', 'datetime', 0, 'on update current_timestamp()', 1, 67),
(284, 'id', 'int', 0, 'auto_increment', 0, 69),
(285, 'systemName', 'varchar', 0, '', 0, 69),
(286, 'systemValue', 'varchar', 0, '', 1, 69),
(287, 'mask', 'int', 0, '', 0, 69),
(288, 'id', 'int', 11, 'auto_increment', 0, 70),
(289, 'systemName', 'varchar', 50, '', 0, 70),
(290, 'systemValue', 'varchar', 250, '', 1, 70),
(291, 'mask', 'int', 11, '', 0, 70),
(292, 'id', 'int', 11, 'auto_increment', 0, 71),
(293, 'systemName', 'varchar', 50, '', 0, 71),
(294, 'systemValue', 'varchar', 250, '', 1, 71),
(295, 'mask', 'int', 11, '', 0, 71),
(296, 'id', 'int', 11, 'auto_increment', 0, 72),
(297, 'name', 'varchar', 50, '', 1, 72),
(298, 'indexOrder', 'int', 11, '', 0, 72),
(299, 'isActive', 'tinyint', 1, '', 1, 72),
(300, 'id', 'int', 11, '', 0, 73),
(301, 'id', 'int', 11, '', 0, 74),
(302, 'id', 'int', 11, 'auto_increment', 0, 75),
(303, 'systemName', 'varchar', 50, '', 0, 75),
(304, 'systemValue', 'varchar', 250, '', 1, 75),
(305, 'mask', 'int', 11, '', 0, 75),
(306, 'id', 'int', 11, 'auto_increment', 0, 76),
(307, 'tableName', 'varchar', 50, '', 0, 76),
(308, 'inSync', 'tinyint', 1, '', 0, 76),
(309, 'id', 'int', 11, 'auto_increment', 0, 77),
(310, 'fieldName', 'varchar', 150, '', 0, 77),
(311, 'fieldType', 'varchar', 150, '', 0, 77),
(312, 'fieldLength', 'int', 11, '', 0, 77),
(313, 'fieldConstraint', 'varchar', 150, '', 0, 77),
(314, 'canBeNull', 'tinyint', 1, '', 0, 77),
(315, 'entityId', 'int', 11, '', 0, 77),
(316, 'colName', 'varchar', 150, '', 0, 78),
(317, 'controlName', 'varchar', 150, '', 1, 78),
(318, 'labelName', 'varchar', 50, '', 0, 78),
(319, 'url', 'varchar', 250, '', 1, 78),
(320, 'txtVal', 'varchar', 150, '', 1, 78),
(321, 'valval', 'varchar', 150, '', 1, 78),
(322, 'isActive', 'int', 11, '', 1, 78),
(323, 'tableNme', 'varchar', 150, '', 0, 78),
(324, 'orderIn', 'int', 11, '', 1, 78),
(325, 'positionIn', 'int', 11, '', 1, 78),
(326, 'isRequired', 'tinyint', 1, '', 0, 78),
(327, 'id', 'int', 11, '', 0, 79),
(328, 'id', 'int', 11, 'auto_increment', 0, 80),
(329, 'itemName', 'varchar', 150, '', 0, 80),
(330, 'itemDescription', 'varchar', 150, '', 1, 80),
(331, 'id', 'int', 11, 'auto_increment', 0, 81),
(332, 'idVal', 'varchar', 150, '', 0, 81),
(333, 'textVal', 'varchar', 150, '', 0, 81),
(334, 'listName', 'varchar', 150, '', 0, 81),
(335, 'id', 'int', 11, 'auto_increment', 0, 82),
(336, 'roleId', 'int', 11, '', 0, 82),
(337, 'userId', 'varchar', 250, '', 0, 82),
(338, 'id', 'int', 11, 'auto_increment', 0, 83),
(339, 'name', 'varchar', 50, '', 0, 83),
(340, 'link', 'varchar', 225, '', 1, 83),
(341, 'icon', 'varchar', 50, '', 1, 83),
(342, 'activityId', 'int', 11, '', 0, 83),
(343, 'isActive', 'tinyint', 1, '', 1, 83),
(344, 'orderIndex', 'int', 11, '', 1, 83),
(345, 'id', 'varchar', 250, '', 0, 84),
(346, 'firstName', 'varchar', 200, '', 0, 84),
(347, 'lastName', 'varchar', 200, '', 0, 84),
(348, 'dob', 'date', 0, '', 0, 84),
(349, 'contact', 'varchar', 50, '', 1, 84),
(350, 'email', 'varchar', 200, '', 1, 84),
(351, 'isActive', 'tinyint', 1, '', 1, 84),
(352, 'username', 'varchar', 50, '', 1, 84),
(353, 'password', 'varchar', 255, '', 1, 84),
(354, 'id', 'int', 11, 'auto_increment', 0, 85),
(355, 'toolboxName', 'varchar', 150, '', 0, 85),
(356, 'id', 'int', 11, 'auto_increment', 0, 86),
(357, 'toolboxName', 'varchar', 150, '', 0, 86),
(358, 'id', 'varchar', 50, '', 0, 87),
(359, 'firstName', 'varchar', 50, '', 0, 87),
(360, 'lastName', 'varchar', 50, '', 0, 87),
(361, 'mobileNumber', 'varchar', 20, '', 0, 87),
(362, 'email', 'varchar', 50, '', 1, 87),
(363, 'creationDate', 'datetime', 0, '', 0, 87),
(364, 'statusId', 'int', 10, '', 1, 87),
(365, 'userId', 'varchar', 50, '', 0, 88),
(366, 'userTypeId', 'int', 11, '', 0, 88),
(367, 'isActive', 'tinyint', 1, '', 0, 88),
(368, 'id', 'varchar', 50, '', 0, 89),
(369, 'folder', 'varchar', 50, '', 0, 89),
(370, 'image', 'int', 50, '', 0, 89),
(371, 'isactive', 'tinyint', 1, '', 0, 89),
(372, 'id', 'int', 11, 'auto_increment', 0, 90),
(373, 'userTypeName', 'varchar', 50, '', 0, 90),
(374, 'isActive', 'tinyint', 1, '', 0, 90),
(375, 'id', 'int', 11, 'auto_increment', 0, 91),
(376, 'userTypeId', 'int', 11, '', 0, 91),
(377, 'subActivityId', 'int', 11, '', 0, 91),
(378, 'isActive', 'tinyint', 1, '', 0, 91),
(379, 'creationDate', 'datetime', 0, '', 0, 91),
(380, 'id', 'int', 11, 'auto_increment', 0, 92),
(381, 'userId', 'varchar', 50, '', 0, 92),
(382, 'code', 'varchar', 5, '', 0, 92),
(383, 'isActive', 'tinyint', 1, '', 0, 92),
(384, 'creationDate', 'datetime', 0, '', 0, 92),
(385, 'verificationDate', 'datetime', 0, 'on update current_timestamp()', 1, 92),
(386, 'clsSection', 'VARCHAR', 150, '', 1, 21),
(387, 'id', 'varchar', 20, '', 1, 93),
(388, 'businessname', 'varchar', 30, '', 1, 93),
(389, 'headoffice', 'varchar', 30, '', 1, 93),
(390, 'phonenumber', 'varchar', 20, '', 1, 93),
(391, 'website', 'varchar', 30, '', 1, 93),
(392, 'categoryId', 'int', 11, '', 1, 93),
(393, 'id', 'int', 11, 'auto_increment', 0, 94),
(394, 'name', 'varchar', 50, '', 0, 94),
(395, 'phone', 'varchar', 20, '', 1, 94),
(396, 'email', 'varchar', 50, '', 1, 94),
(397, 'id', 'int', 11, 'AUTO_INCREMENT', 0, 95),
(398, 'userId', 'VARCHAR', 150, '', 0, 95),
(399, 'companyId', 'int', 11, '', 0, 95),
(400, 'hint', 'varchar', 30, '', 0, 95),
(401, 'dateTime', 'DATETIME', 0, '', 0, 95),
(402, 'id', 'int', 11, 'auto_increment', 0, 96),
(403, 'path', 'varchar', 30, '', 1, 96),
(404, 'product_id', 'int', 11, '', 1, 96),
(405, 'id', 'int', 11, 'auto_increment', 0, 97),
(406, 'productname', 'varchar', 20, '', 1, 97),
(407, 'rates', 'varchar', 20, '', 1, 97),
(408, 'id', 'int', 11, '', 1, 98),
(409, 'issued_id', 'int', 11, '', 1, 98),
(410, 'messages', 'varchar', 50, '', 1, 98),
(411, 'id', 'int', 11, '', 0, 99),
(412, 'servicename', 'varchar', 30, '', 1, 99),
(413, 'ranges', 'varchar', 20, '', 1, 99),
(414, 'id', 'int', 11, 'auto_increment', 0, 100),
(415, 'contents', 'varchar', 30, '', 1, 100),
(416, 'id', 'int', 11, 'auto_increment', 0, 101),
(417, 'userId', 'varchar', 50, '', 1, 101),
(418, 'path', 'varchar', 150, '', 0, 101),
(419, 'doctypeId', 'int', 11, '', 0, 101),
(420, 'id', 'int', 11, 'auto_increment', 0, 102),
(421, 'doctypes', 'varchar', 20, '', 1, 102),
(422, 'id', 'int', 11, 'auto_increment', 0, 103),
(423, 'userId', 'varchar', 50, '', 0, 103),
(424, 'accepted', 'varchar', 20, '', 1, 103),
(425, 'dateTime', 'int', 11, '', 0, 103),
(426, 'id', 'int', 11, 'auto_increment', 0, 104),
(427, 'userId', 'varchar', 50, '', 0, 104),
(428, 'dateTime', 'datetime', 0, '', 0, 104),
(429, 'reason', 'varchar', 50, '', 0, 104),
(430, 'status', 'varchar', 20, '', 1, 104),
(431, 'vettedby', 'varchar', 20, '', 1, 104),
(432, 'id', 'int', 11, 'auto_increment', 0, 105),
(433, 'hint', 'varchar', 30, '', 0, 105),
(434, 'date', 'int', 11, '', 1, 105),
(435, 'userId', 'varchar', 150, '', 0, 105),
(436, 'companyId', 'int', 11, '', 0, 105),
(437, 'dateTime', 'datetime', 0, '', 0, 105),
(438, 'id', 'INT', 11, 'AUTO_INCREMENT', 0, 106),
(439, 'name', 'VARCHAR', 150, '', 0, 106),
(440, 'id', 'INT', 11, 'AUTO_INCREMENT', 0, 107),
(441, 'Name', 'VARCHAR', 150, '', 0, 107),
(442, 'id', 'int', 11, 'auto_increment', 0, 108),
(443, 'Name', 'varchar', 150, '', 0, 108),
(444, 'id', 'INT', 11, 'PK', 0, 109);

-- --------------------------------------------------------

--
-- Table structure for table `entityform`
--

CREATE TABLE `entityform` (
  `colName` varchar(150) NOT NULL,
  `controlName` varchar(150) DEFAULT NULL,
  `labelName` varchar(50) NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `txtVal` varchar(150) DEFAULT NULL,
  `valval` varchar(150) DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  `tableNme` varchar(150) NOT NULL,
  `orderIn` int(11) DEFAULT NULL,
  `positionIn` int(11) DEFAULT NULL,
  `isRequired` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `entityform`
--

INSERT INTO `entityform` (`colName`, `controlName`, `labelName`, `url`, `txtVal`, `valval`, `isActive`, `tableNme`, `orderIn`, `positionIn`, `isRequired`) VALUES
('id', 'textbox', 'id', '', '', '', 1, 'page', 0, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `guitoolbox`
--

CREATE TABLE `guitoolbox` (
  `id` int(15) NOT NULL,
  `guiToolName` varchar(150) NOT NULL,
  `openTag` varchar(250) NOT NULL,
  `closeTag` varchar(250) DEFAULT NULL,
  `dispayHtml` varchar(250) DEFAULT NULL,
  `defaultClass` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `guitoolbox`
--

INSERT INTO `guitoolbox` (`id`, `guiToolName`, `openTag`, `closeTag`, `dispayHtml`, `defaultClass`) VALUES
(1, 'Layout Grid', 'PGRpdj4=', 'PC9kaXY+', 'PGkgY2xhc3M9J2ZhIGZhLWJhcnMnPjwvaT4=', ''),
(2, 'Paragraphy', 'PHA+', 'PC9wPg==', 'PGkgY2xhc3M9J2ZhIGZhLXBhcmFncmFwaCc+PC9pPg==', ''),
(3, 'Heading 1', 'PGgxPg==', 'PC9oMT4=', 'PGkgY2xhc3M9J2ZhIGZhLWhlYWRlcic+IDE8L2k+', ''),
(4, 'Heading 2', 'PGgyPg==', 'PC9oMj4=', 'PGkgY2xhc3M9J2ZhIGZhLWhlYWRlcic+IDI8L2k+', ''),
(5, 'Heading 3', 'PGgzPg==', 'PC9oMz4=', 'PGkgY2xhc3M9J2ZhIGZhLWhlYWRlcic+IDM8L2k+', ''),
(6, 'Heading 4', 'PGg0Pg==', 'PC9oND4=', 'PGkgY2xhc3M9J2ZhIGZhLWhlYWRlcic+IDQ8L2k+', ''),
(7, 'heading 5', 'PGg1Pg==', 'PC9oNT4=', 'PGkgY2xhc3M9J2ZhIGZhLWhlYWRlcic+IDU8L2k+', ''),
(8, 'heading 6', 'PGg2Pg==', 'PC9oNj4=', 'PGkgY2xhc3M9J2ZhIGZhLWhlYWRlcic+ICA2PC9pPg==', ''),
(9, 'Link', 'PGE+', 'PC9hPg==', 'PGkgY2xhc3M9J2ZhIGZhLWxpbmsnPjwvaT4=', ''),
(10, 'Image', 'PGltZz4=', 'PC9pbWc+', 'PGkgY2xhc3M9J2ZhIGZhLWltYWdlJz48L2k+', ''),
(11, 'Un order List', 'PHVsPg==', 'PC91bD4=', 'PGkgY2xhc3M9J2ZhIGZhLWxpc3QtdWwnPiA8L2k+', ''),
(12, 'Order List', 'PG9sPg==', 'PC9vbD4=', 'PGkgY2xhc3M9J2ZhIGZhLWxpc3Qtb2wnPjwvaT4=', ''),
(13, 'List Item', 'PGxpPg==', 'PC9saT4=', 'PGkgY2xhc3M9J2ZhIGZhLWRvdC1jaXJjbGUtbyc+IDwvaT4=', ''),
(14, 'Table', 'PHRhYmxlPg==', 'PC90YWJsZT4=', 'PGkgY2xhc3M9J2ZhIGZhLXRhYmxlJz48L2k+', ''),
(15, 'Table Row', 'PHRyPg==', 'PC90cj4=', 'PGkgY2xhc3M9J2ZhIGZhLXRoLWxhcmdlJz4gPC9pPg==', ''),
(16, 'Table Header', 'PHRoPg==', 'PC90aD4=', 'PGkgY2xhc3M9J2ZhIGZhLXRoJz48L2k+', ''),
(17, 'table Data', 'PHRkPg==', 'PC90ZD4=', 'PGkgY2xhc3M9J2ZhIGZhLXNxdWFyZSc+PC9pPg==', '');

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `imagefile`
--

CREATE TABLE `imagefile` (
  `id` int(15) NOT NULL,
  `itemId` int(15) NOT NULL,
  `path` varchar(250) NOT NULL,
  `isActive` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `imagefile`
--

INSERT INTO `imagefile` (`id`, `itemId`, `path`, `isActive`) VALUES
(7, 1, '../public/import/images/1592002979Catalogue-6_page64_image6-uai-258x245.jpg', 1),
(8, 1, '../public/import/images/1592002979Catalogue-6_page64_image11-uai-258x228.jpg', 1),
(9, 2, '../public/import/images/1592003173Catalogue-6_page64_image6-uai-258x245.jpg', 1),
(10, 2, '../public/import/images/1592003173Catalogue-6_page64_image11-uai-258x228.jpg', 1),
(11, 3, '../public/import/images/1592248726Cheap-Hospital-Electric-Operating-Table-Operation-Bed-Operation-Table-China.jpg', 1),
(12, 3, '../public/import/images/1592248727475476.jpg', 1),
(13, 4, '../public/import/images/1592248823475476.jpg', 1),
(14, 5, '../public/import/images/1592249032Catalogue-8_page63_image13.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id` int(15) NOT NULL,
  `itemName` varchar(150) NOT NULL,
  `itemDescription` text DEFAULT NULL,
  `creationDate` date NOT NULL,
  `ModifiedDate` date DEFAULT NULL,
  `isActive` int(1) DEFAULT NULL,
  `categoryId` int(15) NOT NULL,
  `amount` float NOT NULL,
  `uom` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `itemName`, `itemDescription`, `creationDate`, `ModifiedDate`, `isActive`, `categoryId`, `amount`, `uom`) VALUES
(1, 'BODY FAT/HYDRATION ', 'Body fat and hydration % differential resolution:0.1%\r\nMemory:8 persons\r\nBody fat measure range:4.0-45.0%\r\nBody hydration measure range:37.8-66.0%\r\nMax.weight capacity:150 kg/330 lb/24 stone\r\nMin.effective at:2.0 kg/4.4 lb\r\nDivision:100 g/0.2 lb\r\nDisplay screen:76Ã—38 mm\r\nUser modes:adult,child(age 10-100)\r\nPower:4Ã—1.5V AA batteries(not included)\r\nDimensions of the scale:32.6x30x5cm\r\nDimensions of colour box:37.4Ã—34.5Ã—7.5cm\r\nPacking volume:39.5Ã—36.2Ã—32.5cm 4 pcs/ctn\r\nN.W.:10.2kg G.W.: 11.9kg\r\n20 feet container can hold 2408 pcs\r\n40 feet container can hold 4984 pcs', '2020-06-13', NULL, 1, 4, 2500, 'Carton'),
(2, 'Mercurial sphygmomanometer', 'Short sleeve t-shirts in black, crewneck collar. Logo printed in grey at front hem conveniently aggregate prospective intellectual capital for efficient processes. Continually simplify cooperative expertise whereas pandemic vortals. Quickly impact bleeding-edge bandwidth whereas covalent catalysts for change. Tonal stitching. 98% cotton, 2% elastane. Made in Italy.', '2020-06-13', NULL, 1, 4, 25003, 'Carton'),
(3, 'Electric operating table MP5A', 'ELECTRIC OPERATING TABLE\r\nThis bed is designed for surgical procedures of head,neck,thorax and\r\nabdomen,perineum extremities as well as for gynaeclolgical, oto-rhino-laryngological\r\nand orthopaedics operation.The table top,made of double-decker plastic.\r\nSo that X-ray examination can be avaliable during operation.Itâ€™s raising,lowing,la\r\nteraltilt,reversed trendelenburg and trendelenburg movement,back section bending\r\nare all controlled by electrically.It can adjust easily,And its performance is also\r\nreliable.Anti-static senior PY foam material is optional for mattress.\r\nMP5a:Length:2100mm,Width:480mm,Max Height:1000mm,Min Height:750mm', '0000-00-00', NULL, 1, 4, 54000, 'Piece'),
(4, 'MP4 Electric Operating Tables', 'MP4a/MP4b ELECTRIC OPERATING TABLE\r\nElectric operating table is designed for all operations in hospitals.Besides all functions of the domesic products,it has its own advantages:\r\n1.Leg section can be rotated,opened,disassmbled and adjusted easily.It is most adapt to the urological operation.\r\n2.The table top,made of highstrength plastic,can move backwards and forwards.X-ray examination can be carried out on it.\r\n3.With 24V direct supply,the table is safe and reliable.The tableâ€™selevation,lowering,reversed trendelenburg;trendelenburg,lateral tilt are all automatically\r\ncontrolled by the Button.\r\n4.This table can be configured with different kinds of table tops for different use.\r\n5.The ascending and descending movements,lateral tilt movements,reversed trendelenburg,trendelenburg movements ;and backward and forward\r\nmovements of the table top are all electrical operated.\r\nElectric operating table is one of the most advaced operating table with excellent functions in China.Availabe for the Model C arm.\r\nThe back section and the leg section of Model MP4b is equiped with the barometric pressure spring.Anti-static Senior PY foam material is optional for\r\nmattress.\r\nThe ascending and descending movements,lateral tilt movements,reversed trendelenburg,trendelenburg movements,backward and forward movements\r\nand up-and-down of kidney section of model MP4b are all electrically operated.\r\nMP4a model:Length:2100mm,Width:480mm,Max Height:1000mm,Min Height:750mm\r\nMP4b model:Length:2100mm,Width:500mm,Max Height:1000mm,Min Height:750mm', '0000-00-00', NULL, 1, 4, 1056000, 'Piece'),
(5, 'Low Speed Centrifuge', 'Timer range 0min-99min\r\nNoise <70dB\r\nPower 220V 50Hz\r\nCirccity power 750w\r\nCapacity 1000mlx4\r\nMax.RCF 3100xg\r\nTiming range 100-3600rpm\r\nRotate speed precision <Â±20rpm\r\nTemperature rise <5â„ƒ\r\nDimensions 550x720x430mm(LxWxH)\r\nWeight 55kg', '0000-00-00', NULL, 1, 4, 4500, 'Piece');

-- --------------------------------------------------------

--
-- Table structure for table `itemimage`
--

CREATE TABLE `itemimage` (
  `id` int(15) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `isActive` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `itemtemplate`
--

CREATE TABLE `itemtemplate` (
  `id` int(11) NOT NULL,
  `itemName` varchar(150) NOT NULL,
  `itemDescription` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `listhandle`
--

CREATE TABLE `listhandle` (
  `id` int(11) NOT NULL,
  `idVal` varchar(150) NOT NULL,
  `textVal` varchar(150) NOT NULL,
  `listName` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `listhandle`
--

INSERT INTO `listhandle` (`id`, `idVal`, `textVal`, `listName`) VALUES
(1, '1', 'YES', 'isActive'),
(2, '0', 'No', 'isActive'),
(3, 'Female', 'Female', 'SEX'),
(4, 'Male', 'Male', 'SEX'),
(5, 'Single', 'Single', 'martialStatus'),
(6, 'Married', 'Married', 'martialStatus'),
(7, 'Employed', 'Employed', 'employmentStatus'),
(8, 'Unemployed', 'Unemployed', 'employmentStatus'),
(9, 'Self Employed', 'Self Employed', 'employmentStatus'),
(10, 'INT', 'INT', 'dataType'),
(11, 'DECIMAL', 'DECIMAL', 'dataType'),
(12, 'FLOAT', 'FLOAT', 'dataType'),
(13, 'DOUBLE', 'DOUBLE', 'dataType'),
(14, 'CHAR', 'CHAR', 'dataType'),
(15, 'VARCHAR', 'VARCHAR', 'dataType'),
(16, ' TEXT', ' TEXT', 'dataType'),
(17, 'DATE', 'DATE', 'dataType'),
(18, 'TIME', 'TIME', 'dataType'),
(19, 'DATETIME', 'DATETIME', 'dataType'),
(20, 'JSON', 'JSON', 'dataType'),
(21, 'AUTO_INCREMENT', 'AUTO_INCREMENT', 'DB_CONSTRAINT'),
(22, 'PK', 'PK', 'DB_CONSTRAINT'),
(23, 'css', 'css', 'fileType'),
(24, 'js', 'js', 'fileType'),
(25, 'ON UPDATE CURRENT_TIMESTAMP', 'ON UPDATE CURRENT_TIMESTAMP', 'DB_CONSTRAINT'),
(26, 'DEFAULT CURRENT_TIMESTAMP', 'DEFAULT CURRENT_TIMESTAMP', 'DB_CONSTRAINT'),
(27, 'Piece', 'Piece', 'uom'),
(28, 'Kgs', 'Kgs', 'uom'),
(29, 'Drozen', 'Drozen', 'uom'),
(30, 'Carton', 'Carton', 'uom'),
(31, 'slide', 'slide', 'resType'),
(32, 'image', 'image', 'resType');

-- --------------------------------------------------------

--
-- Table structure for table `listingentry`
--

CREATE TABLE `listingentry` (
  `id` int(11) NOT NULL,
  `hint` varchar(30) NOT NULL,
  `date` int(11) DEFAULT NULL,
  `userId` varchar(150) NOT NULL,
  `companyId` int(11) NOT NULL,
  `dateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderdeliverypoint`
--

CREATE TABLE `orderdeliverypoint` (
  `id` int(15) NOT NULL,
  `orderId` int(15) NOT NULL,
  `deliveryPointId` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orderitem`
--

CREATE TABLE `orderitem` (
  `id` int(15) NOT NULL,
  `orderId` int(15) NOT NULL,
  `itemId` int(15) NOT NULL,
  `qty` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderitem`
--

INSERT INTO `orderitem` (`id`, `orderId`, `itemId`, `qty`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 2, 1, 1),
(4, 3, 1, 1),
(5, 4, 5, 2),
(6, 4, 4, 2),
(7, 4, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pageresource`
--

CREATE TABLE `pageresource` (
  `id` int(15) NOT NULL,
  `resourcepath` varchar(350) NOT NULL,
  `resourceType` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pageresource`
--

INSERT INTO `pageresource` (`id`, `resourcepath`, `resourceType`) VALUES
(17, '../public/import/images/slider-1.jpg', 'slide'),
(18, '../public/import/images/slider-2.jpg', 'slide'),
(19, '../public/import/images/slider-3.jpg', 'slide'),
(20, '../public/import/images/slider-4.jpg', 'slide'),
(21, '../public/import/images/slider-5.jpg', 'slide'),
(22, '../public/import/images/Who We Are Image.jpg', 'image'),
(23, '../public/import/images/How We Work Image.jpg', 'image'),
(24, '../public/import/images/sv-1.jpg', 'image'),
(25, '../public/import/images/sv-2.jpg', 'image'),
(26, '../public/import/images/sv-3.jpg', 'image'),
(27, '../public/import/images/sv-4.jpg', 'image'),
(28, '../public/import/images/sv-5.jpg', 'image'),
(29, '../public/import/images/sv-6.jpg', 'image'),
(30, '../public/import/images/tm-1.jpg', 'image'),
(31, '../public/import/images/tm-2.jpg', 'image'),
(32, '../public/import/images/tm-3.jpg', 'image'),
(33, '../public/import/images/tm-4.jpg', 'image'),
(34, '../public/import/images/tm-5.jpg', 'image');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productname` varchar(150) DEFAULT NULL,
  `productDetails` varchar(250) DEFAULT NULL,
  `businessProfileId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productimage`
--

CREATE TABLE `productimage` (
  `id` int(11) NOT NULL,
  `path` varchar(30) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `requestquote`
--

CREATE TABLE `requestquote` (
  `id` int(11) DEFAULT NULL,
  `issued_id` int(11) DEFAULT NULL,
  `messages` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rolemanagement`
--

CREATE TABLE `rolemanagement` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rolemanagement`
--

INSERT INTO `rolemanagement` (`id`, `roleId`, `userId`) VALUES
(1, 3, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(284, 4, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(299, 14, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(300, 2, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(307, 7, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(309, 92, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(328, 93, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(330, 94, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(341, 1, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(352, 1, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(353, 2, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(354, 4, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(355, 7, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(356, 14, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(357, 93, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(358, 94, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(359, 112, '{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}'),
(360, 112, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(362, 114, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(363, 115, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(366, 118, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(367, 119, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(373, 124, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}'),
(375, 126, '{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}');

-- --------------------------------------------------------

--
-- Table structure for table `sectioncolumn`
--

CREATE TABLE `sectioncolumn` (
  `id` int(15) NOT NULL,
  `columnNm` varchar(150) NOT NULL,
  `sectionId` int(15) NOT NULL,
  `columnCls` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sectioncolumn`
--

INSERT INTO `sectioncolumn` (`id`, `columnNm`, `sectionId`, `columnCls`) VALUES
(1, 'col1', 2, 'slider_inner'),
(2, 'col1', 3, 'col-lg-3'),
(3, 'col2', 3, 'col-lg-3'),
(4, 'col3', 3, 'col-lg-3'),
(5, 'col4', 3, 'col-lg-3'),
(6, 'col1', 4, 'container'),
(7, 'col1', 5, 'container'),
(9, 'col1', 6, 'container'),
(10, 'col1', 7, 'container'),
(11, 'col1', 8, 'container'),
(12, 'col1', 9, 'container'),
(13, 'col1', 10, 'container'),
(14, 'col1', 11, 'book_now_aera');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `servicename` varchar(30) DEFAULT NULL,
  `ranges` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `spec`
--

CREATE TABLE `spec` (
  `id` int(15) NOT NULL,
  `specKeyId` int(15) NOT NULL,
  `specValue` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `speckey`
--

CREATE TABLE `speckey` (
  `id` int(15) NOT NULL,
  `specText` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `statu`
--

CREATE TABLE `statu` (
  `id` int(11) NOT NULL,
  `statusName` varchar(50) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statu`
--

INSERT INTO `statu` (`id`, `statusName`, `isActive`) VALUES
(1, 'verify', 1),
(2, 'verified', 1),
(4, 'deactivated', 1);

-- --------------------------------------------------------

--
-- Table structure for table `subactivity`
--

CREATE TABLE `subactivity` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `link` varchar(225) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `activityId` int(11) NOT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `orderIndex` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subactivity`
--

INSERT INTO `subactivity` (`id`, `name`, `link`, `icon`, `activityId`, `isActive`, `orderIndex`) VALUES
(1, 'Modules', '../activitys/view', NULL, 5, 1, 1),
(2, 'Functional Spec', '../subActivitys/view', NULL, 5, 1, 2),
(3, 'Administration User', '../systemUsers/view', 'fa fa-users', 5, 1, 10),
(4, 'Role Management', '../roleManagements/view', NULL, 5, 1, 4),
(7, 'Code Builder', '../codeBuilders/view', NULL, 5, 1, 5),
(14, 'Setting System Value', '../configurationsettings/view', NULL, 5, 1, 7),
(92, 'Report Desiger', '../reports/view', 'fa fa-file-o', 5, 1, 11),
(93, 'Create List', '../listhandles/view', 'fa fa-list', 5, 1, 12),
(94, 'Test Node', '../tests/view', 'fa fa-list', 5, 1, 13),
(107, 'Approve Plans', '../categorys/view', 'fa fa-books', 0, 1, 0),
(112, 'Manage Entity', '../entitys/view', 'fa fa-table', 24, 1, 1),
(114, 'Add Attrubite Keys', '../attkeys/view', 'fa fa-list', 5, 1, 10),
(115, 'Gui Tool Box Setup', '../guitoolboxs/view', 'fa fa-cogs', 5, 1, 12),
(118, 'Tool Box', '../toolboxs/view', 'fa fa-cog', 5, 1, 12),
(119, 'Theme', '../themes/view', 'fa fa-bookmark', 5, 1, 13),
(124, 'Manage User Types', '../usertypes/view', 'fa fa-users', 22, 1, 1),
(126, 'Manage Category', '../categorys/view', 'fa fa-file-o', 22, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `systemuser`
--

CREATE TABLE `systemuser` (
  `id` varchar(250) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `dob` date NOT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `systemuser`
--

INSERT INTO `systemuser` (`id`, `firstName`, `lastName`, `dob`, `contact`, `email`, `isActive`, `username`, `password`) VALUES
('{9EE59F1B-C631-265E-4CF6-8C63D4F2F16C}', 'admin', 'admin', '1991-01-01', '07819567081', 'test@code360ds.com', 1, 'admin', 'OX74zRU='),
('{A8945A24-0759-7808-0A38-F36FFC6097BE}', 'james', 'yiga', '0000-00-00', '+256781587081', 'james2yiga@gmail.com', 1, 'james2yiga@gmail.com', 'aSimkE77FoidfA=='),
('{C1F587C1-AF06-AB17-DA4D-D6FBD183FB49}', 'James Tom', 'Matovu', '0000-00-00', '+256772771859', 'james2yiga@yahoo.com', 1, 'james2yiga@yahoo.com', 'aSimkE77'),
('{CB706CAB-4A0F-96C7-6C80-04B65B8049E4}', 'James', 'Yiga', '1990-07-25', '+256781587081', 'james.yiga@sybrin.com', 1, 'jyiga', 'aSimkA==');

-- --------------------------------------------------------

--
-- Table structure for table `termsandconditions`
--

CREATE TABLE `termsandconditions` (
  `id` int(11) NOT NULL,
  `contents` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `testexp`
--

CREATE TABLE `testexp` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testexp`
--

INSERT INTO `testexp` (`id`, `name`) VALUES
(1, 'teststststs');

-- --------------------------------------------------------

--
-- Table structure for table `testxp`
--

CREATE TABLE `testxp` (
  `id` int(11) NOT NULL,
  `Name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `theme`
--

CREATE TABLE `theme` (
  `id` int(15) NOT NULL,
  `themeName` varchar(150) NOT NULL,
  `isDefault` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `theme`
--

INSERT INTO `theme` (`id`, `themeName`, `isDefault`) VALUES
(1, 'test', 1),
(2, 'test', 1);

-- --------------------------------------------------------

--
-- Table structure for table `themefile`
--

CREATE TABLE `themefile` (
  `id` int(15) NOT NULL,
  `file` varchar(250) NOT NULL,
  `fileType` varchar(50) NOT NULL,
  `extractable` int(1) NOT NULL,
  `themeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `themefile`
--

INSERT INTO `themefile` (`id`, `file`, `fileType`, `extractable`, `themeId`) VALUES
(1, '../public/theme/css/1591895568style.css', 'css', 1, 1),
(2, '../public/theme/css/1591896823slick-theme.css', 'css', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `themestyle`
--

CREATE TABLE `themestyle` (
  `id` int(15) NOT NULL,
  `attName` varchar(150) NOT NULL,
  `attType` varchar(150) NOT NULL,
  `themeId` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `themestyle`
--

INSERT INTO `themestyle` (`id`, `attName`, `attType`, `themeId`) VALUES
(1, 'primary-color', 'class', '1'),
(2, 'white-color', 'class', '1'),
(3, 'font-weak', 'class', '1'),
(4, 'main-btn,', 'class', '1'),
(5, 'primary-btn', 'class', '1'),
(6, 'icon-btn.main-btn,', 'class', '1'),
(7, 'icon-btn.primary-btn', 'class', '1'),
(8, 'main-btn', 'class', '1'),
(9, 'main-btn:hover,', 'class', '1'),
(10, 'main-btn:focus', 'class', '1'),
(11, 'primary-btn', 'class', '1'),
(12, 'primary-btn:hover,', 'class', '1'),
(13, 'primary-btn:focus', 'class', '1'),
(14, 'input', 'class', '1'),
(15, 'input:focus', 'class', '1'),
(16, 'input-checkbox', 'class', '1'),
(17, 'caption', 'class', '1'),
(18, 'input-checkbox>label', 'class', '1'),
(19, 'input-checkbox', 'class', '1'),
(20, 'input-checkbox', 'class', '1'),
(21, 'list-links', 'class', '1'),
(22, 'list-links-title', 'class', '1'),
(23, 'list-links', 'class', '1'),
(24, 'list-links', 'class', '1'),
(25, 'list-links', 'class', '1'),
(26, 'list-links', 'class', '1'),
(27, 'list-links', 'class', '1'),
(28, 'list-links', 'class', '1'),
(29, 'list-links', 'class', '1'),
(30, 'list-links', 'class', '1'),
(31, 'section', 'class', '1'),
(32, 'section-grey', 'class', '1'),
(33, 'section-title', 'class', '1'),
(34, 'section-title', 'class', '1'),
(35, 'title', 'class', '1'),
(36, 'section-title:after', 'class', '1'),
(37, 'breadcrumb', 'id', '1'),
(38, 'breadcrumb', 'class', '1'),
(39, 'breadcrumb>.active', 'class', '1'),
(40, 'breadcrumb>li+li:before', 'class', '1'),
(41, 'header', 'id', '1'),
(42, 'top-header', 'id', '1'),
(43, 'header-top-links>li', 'class', '1'),
(44, 'header-top-links>li+li', 'class', '1'),
(45, 'header-top-links>li>a', 'class', '1'),
(46, 'header-logo', 'class', '1'),
(47, 'header-logo', 'class', '1'),
(48, 'logo>img', 'class', '1'),
(49, 'header-search', 'class', '1'),
(50, 'header-search>form', 'class', '1'),
(51, 'header-search>form', 'class', '1'),
(52, 'search-input', 'class', '1'),
(53, 'header-search>form', 'class', '1'),
(54, 'search-categories', 'class', '1'),
(55, 'header-search>form', 'class', '1'),
(56, 'search-btn', 'class', '1'),
(57, 'header-btns>li', 'class', '1'),
(58, 'header-btns>li+li', 'class', '1'),
(59, 'header-btns>li', 'class', '1'),
(60, 'header-btns-icon', 'class', '1'),
(61, 'header-btns', 'class', '1'),
(62, 'dropdown-toggle', 'class', '1'),
(63, 'header-account.dropdown', 'class', '1'),
(64, 'custom-menu>li>a>i', 'class', '1'),
(65, 'header-cart', 'class', '1'),
(66, 'header-btns-icon', 'class', '1'),
(67, 'qty', 'class', '1'),
(68, 'header-cart.dropdown', 'class', '1'),
(69, 'custom-menu', 'class', '1'),
(70, 'shopping-cart', 'id', '1'),
(71, 'shopping-cart-list', 'class', '1'),
(72, 'shopping-cart', 'id', '1'),
(73, 'shopping-cart-list', 'class', '1'),
(74, 'product.product-widget:first-child', 'class', '1'),
(75, 'shopping-cart', 'id', '1'),
(76, 'shopping-cart-list', 'class', '1'),
(77, 'product.product-widget:last-child', 'class', '1'),
(78, 'shopping-cart', 'id', '1'),
(79, 'shopping-cart-btns>button', 'class', '1'),
(80, 'navigation', 'id', '1'),
(81, 'navigation', 'id', '1'),
(82, 'container', 'class', '1'),
(83, 'category-nav', 'class', '1'),
(84, 'category-nav', 'class', '1'),
(85, 'category-header', 'class', '1'),
(86, 'category-nav', 'class', '1'),
(87, 'category-header>i', 'class', '1'),
(88, 'category-nav', 'class', '1'),
(89, 'category-list', 'class', '1'),
(90, 'category-nav.show-on-click', 'class', '1'),
(91, 'category-list', 'class', '1'),
(92, 'category-nav.show-on-click', 'class', '1'),
(93, 'category-list.open', 'class', '1'),
(94, 'category-nav', 'class', '1'),
(95, 'category-list>li+li', 'class', '1'),
(96, 'category-nav', 'class', '1'),
(97, 'category-list>li.dropdown>.dropdown-toggle>i', 'class', '1'),
(98, 'category-nav', 'class', '1'),
(99, 'category-list>li>a', 'class', '1'),
(100, 'category-nav', 'class', '1'),
(101, 'category-list>li>a:hover,', 'class', '1'),
(102, 'category-nav', 'class', '1'),
(103, 'category-list>li>a:focus,', 'class', '1'),
(104, 'category-nav', 'class', '1'),
(105, 'category-list>li.dropdown.open>a', 'class', '1'),
(106, 'menu-nav', 'class', '1'),
(107, 'menu-header', 'class', '1'),
(108, 'menu-nav', 'class', '1'),
(109, 'menu-header>i', 'class', '1'),
(110, 'menu-nav', 'class', '1'),
(111, 'menu-list>li', 'class', '1'),
(112, 'menu-nav', 'class', '1'),
(113, 'menu-list>li>a', 'class', '1'),
(114, 'menu-nav', 'class', '1'),
(115, 'menu-list>li>a:hover,', 'class', '1'),
(116, 'menu-nav', 'class', '1'),
(117, 'menu-list>li>a:focus,', 'class', '1'),
(118, 'menu-nav', 'class', '1'),
(119, 'menu-list>li.dropdown.open>a', 'class', '1'),
(120, 'custom-menu', 'class', '1'),
(121, 'dropdown.open>.custom-menu', 'class', '1'),
(122, 'dropdown.default-dropdown>.custom-menu', 'class', '1'),
(123, 'dropdown.default-dropdown.open>.custom-menu', 'class', '1'),
(124, 'dropdown.default-dropdown>.custom-menu>li>a', 'class', '1'),
(125, 'dropdown.mega-dropdown.full-width', 'class', '1'),
(126, 'dropdown.mega-dropdown>.custom-menu', 'class', '1'),
(127, 'dropdown.mega-dropdown.full-width>.custom-menu', 'class', '1'),
(128, 'dropdown.mega-dropdown.open>.custom-menu', 'class', '1'),
(129, 'dropdown.side-dropdown>.custom-menu', 'class', '1'),
(130, 'dropdown.side-dropdown.open>.custom-menu', 'class', '1'),
(131, 'header', 'id', '1'),
(132, 'nav-toggle', 'class', '1'),
(133, 'header', 'id', '1'),
(134, 'nav-toggle', 'class', '1'),
(135, 'pull-left,', 'class', '1'),
(136, 'pull-right', 'class', '1'),
(137, 'pull-right', 'class', '1'),
(138, 'responsive-nav', 'id', '1'),
(139, 'responsive-nav.open', 'id', '1'),
(140, 'responsive-nav', 'id', '1'),
(141, 'dropdown', 'class', '1'),
(142, 'custom-menu', 'class', '1'),
(143, 'responsive-nav', 'id', '1'),
(144, 'dropdown.open', 'class', '1'),
(145, 'custom-menu', 'class', '1'),
(146, 'category-nav', 'class', '1'),
(147, 'category-list,', 'class', '1'),
(148, 'menu-nav', 'class', '1'),
(149, 'menu-list', 'class', '1'),
(150, 'category-nav', 'class', '1'),
(151, 'category-list.open,', 'class', '1'),
(152, 'menu-nav', 'class', '1'),
(153, 'menu-list.open', 'class', '1'),
(154, 'menu-nav', 'class', '1'),
(155, 'menu-header,', 'class', '1'),
(156, 'category-nav', 'class', '1'),
(157, 'category-header', 'class', '1'),
(158, 'category-nav', 'class', '1'),
(159, 'category-nav', 'class', '1'),
(160, 'category-list', 'class', '1'),
(161, 'menu-nav', 'class', '1'),
(162, 'menu-header', 'class', '1'),
(163, 'menu-nav', 'class', '1'),
(164, 'menu-list', 'class', '1'),
(165, 'menu-nav', 'class', '1'),
(166, 'menu-list>li', 'class', '1'),
(167, 'menu-nav', 'class', '1'),
(168, 'menu-list>li+li', 'class', '1'),
(169, 'menu-nav', 'class', '1'),
(170, 'menu-list>li>a', 'class', '1'),
(171, 'navigation.shadow:after', 'id', '1'),
(172, 'banner', 'class', '1'),
(173, 'banner>img', 'class', '1'),
(174, 'banner.banner-1', 'class', '1'),
(175, 'banner-caption', 'class', '1'),
(176, 'banner.banner-2', 'class', '1'),
(177, 'banner-caption', 'class', '1'),
(178, 'banner', 'class', '1'),
(179, 'home', 'id', '1'),
(180, 'home-wrap', 'class', '1'),
(181, 'home-slick', 'id', '1'),
(182, 'banner', 'class', '1'),
(183, 'product', 'class', '1'),
(184, 'product-old-price', 'class', '1'),
(185, 'product', 'class', '1'),
(186, 'product-rating', 'class', '1'),
(187, 'product', 'class', '1'),
(188, 'product-rating>i', 'class', '1'),
(189, 'product', 'class', '1'),
(190, 'product-rating>i.empty', 'class', '1'),
(191, 'product', 'class', '1'),
(192, 'product-label>span', 'class', '1'),
(193, 'product', 'class', '1'),
(194, 'product-label>span.sale', 'class', '1'),
(195, 'product', 'class', '1'),
(196, 'product-countdown', 'class', '1'),
(197, 'product', 'class', '1'),
(198, 'product-countdown>li', 'class', '1'),
(199, 'product', 'class', '1'),
(200, 'product-countdown>li+li:before', 'class', '1'),
(201, 'product', 'class', '1'),
(202, 'product-countdown>li>span', 'class', '1'),
(203, 'product.product-single', 'class', '1'),
(204, 'product.product-single:hover', 'class', '1'),
(205, 'product.product-single', 'class', '1'),
(206, 'product-thumb', 'class', '1'),
(207, 'product.product-single', 'class', '1'),
(208, 'product-thumb>img', 'class', '1'),
(209, 'product.product-single', 'class', '1'),
(210, 'product-thumb:after', 'class', '1'),
(211, 'product.product-single:hover', 'class', '1'),
(212, 'product-thumb:after', 'class', '1'),
(213, 'product.product-single', 'class', '1'),
(214, 'quick-view', 'class', '1'),
(215, 'product.product-single:hover', 'class', '1'),
(216, 'quick-view', 'class', '1'),
(217, 'product.product-single', 'class', '1'),
(218, 'product-label', 'class', '1'),
(219, 'product.product-single', 'class', '1'),
(220, 'product-label>span', 'class', '1'),
(221, 'product.product-single', 'class', '1'),
(222, 'product-countdown', 'class', '1'),
(223, 'product.product-single', 'class', '1'),
(224, 'product-body', 'class', '1'),
(225, 'product.product-single', 'class', '1'),
(226, 'product-price', 'class', '1'),
(227, 'product.product-single', 'class', '1'),
(228, 'product-rating', 'class', '1'),
(229, 'product.product-single', 'class', '1'),
(230, 'product-name', 'class', '1'),
(231, 'product.product-single', 'class', '1'),
(232, 'product-btns', 'class', '1'),
(233, 'product.product-single:hover', 'class', '1'),
(234, 'product-btns', 'class', '1'),
(235, 'product.product-single.product-hot', 'class', '1'),
(236, 'product.product-single.product-hot', 'class', '1'),
(237, 'product-btns', 'class', '1'),
(238, 'product.product-widget', 'class', '1'),
(239, 'product.product-widget', 'class', '1'),
(240, 'product-thumb', 'class', '1'),
(241, 'product.product-widget', 'class', '1'),
(242, 'product-thumb>img', 'class', '1'),
(243, 'product.product-widget', 'class', '1'),
(244, 'product-body', 'class', '1'),
(245, 'product.product-widget', 'class', '1'),
(246, 'product-price', 'class', '1'),
(247, 'product.product-widget', 'class', '1'),
(248, 'product-price', 'class', '1'),
(249, 'qty', 'class', '1'),
(250, 'product.product-widget', 'class', '1'),
(251, 'product-name', 'class', '1'),
(252, 'product.product-widget', 'class', '1'),
(253, 'cancel-btn', 'class', '1'),
(254, 'product.product-widget', 'class', '1'),
(255, 'cancel-btn:hover', 'class', '1'),
(256, 'product-slick', 'class', '1'),
(257, 'slick-slide', 'class', '1'),
(258, 'aside', 'id', '1'),
(259, 'aside', 'class', '1'),
(260, 'aside', 'id', '1'),
(261, 'aside:last-child', 'class', '1'),
(262, 'aside', 'class', '1'),
(263, 'aside-title', 'class', '1'),
(264, 'aside', 'class', '1'),
(265, 'aside-title:after', 'class', '1'),
(266, 'filter-list', 'class', '1'),
(267, 'filter-list>li', 'class', '1'),
(268, 'filter-list>li:last-child', 'class', '1'),
(269, 'filter-list', 'class', '1'),
(270, 'filter-list', 'class', '1'),
(271, 'price-slider', 'id', '1'),
(272, 'noUi-target', 'class', '1'),
(273, 'noUi-connect', 'class', '1'),
(274, 'noUi-horizontal', 'class', '1'),
(275, 'noUi-horizontal', 'class', '1'),
(276, 'noUi-handle', 'class', '1'),
(277, 'noUi-handle:before,', 'class', '1'),
(278, 'noUi-handle:after', 'class', '1'),
(279, 'noUi-tooltip', 'class', '1'),
(280, 'store', 'id', '1'),
(281, 'row-filter', 'class', '1'),
(282, 'row-filter>a', 'class', '1'),
(283, 'row-filter>a:hover', 'class', '1'),
(284, 'row-filter>a.active', 'class', '1'),
(285, 'sort-filter', 'class', '1'),
(286, 'sort-filter', 'class', '1'),
(287, 'page-filter', 'class', '1'),
(288, 'page-filter', 'class', '1'),
(289, 'store-pages', 'class', '1'),
(290, 'store-pages', 'class', '1'),
(291, 'store-pages', 'class', '1'),
(292, 'store-pages', 'class', '1'),
(293, 'product-main-view', 'id', '1'),
(294, 'slick-arrow', 'class', '1'),
(295, 'product-main-view:hover', 'id', '1'),
(296, 'slick-arrow', 'class', '1'),
(297, 'product-view', 'id', '1'),
(298, 'product-view', 'id', '1'),
(299, 'product-view.slick-slide', 'class', '1'),
(300, 'product-view', 'id', '1'),
(301, 'product-view.slick-slide.slick-current', 'class', '1'),
(302, 'product-view', 'id', '1'),
(303, 'product-view', 'class', '1'),
(304, 'product-view>img', 'class', '1'),
(305, 'product.product-details', 'class', '1'),
(306, 'product-name', 'class', '1'),
(307, 'product.product-details', 'class', '1'),
(308, 'product-rating', 'class', '1'),
(309, 'product.product-details', 'class', '1'),
(310, 'product-options', 'class', '1'),
(311, 'product-options', 'class', '1'),
(312, 'size-option', 'class', '1'),
(313, 'size-option>li', 'class', '1'),
(314, 'size-option>li:last-child', 'class', '1'),
(315, 'size-option>li>a', 'class', '1'),
(316, 'size-option>li.active', 'class', '1'),
(317, 'color-option>li', 'class', '1'),
(318, 'color-option>li:last-child', 'class', '1'),
(319, 'color-option>li>a', 'class', '1'),
(320, 'color-option>li.active', 'class', '1'),
(321, 'product.product-details', 'class', '1'),
(322, 'qty-input', 'class', '1'),
(323, 'product.product-details', 'class', '1'),
(324, 'qty-input', 'class', '1'),
(325, 'input', 'class', '1'),
(326, 'product-tab', 'class', '1'),
(327, 'product-tab', 'class', '1'),
(328, 'tab-nav', 'class', '1'),
(329, 'product-tab', 'class', '1'),
(330, 'tab-nav', 'class', '1'),
(331, 'product-tab', 'class', '1'),
(332, 'tab-nav', 'class', '1'),
(333, 'product-tab', 'class', '1'),
(334, 'tab-nav', 'class', '1'),
(335, 'product-tab', 'class', '1'),
(336, 'tab-nav', 'class', '1'),
(337, 'product-tab', 'class', '1'),
(338, 'tab-nav', 'class', '1'),
(339, 'product-tab', 'class', '1'),
(340, 'tab-nav', 'class', '1'),
(341, 'single-review', 'class', '1'),
(342, 'single-review', 'class', '1'),
(343, 'review-heading>div', 'class', '1'),
(344, 'single-review', 'class', '1'),
(345, 'review-heading>div+div', 'class', '1'),
(346, 'single-review', 'class', '1'),
(347, 'review-rating', 'class', '1'),
(348, 'single-review', 'class', '1'),
(349, 'review-rating>i', 'class', '1'),
(350, 'single-review', 'class', '1'),
(351, 'review-rating>i.empty', 'class', '1'),
(352, 'single-review', 'class', '1'),
(353, 'review-body', 'class', '1'),
(354, 'reviews-pages', 'class', '1'),
(355, 'reviews-pages', 'class', '1'),
(356, 'reviews-pages', 'class', '1'),
(357, 'review-form', 'class', '1'),
(358, 'review-form', 'class', '1'),
(359, 'input-rating', 'class', '1'),
(360, 'stars', 'class', '1'),
(361, 'review-form', 'class', '1'),
(362, 'input-rating', 'class', '1'),
(363, 'stars', 'class', '1'),
(364, 'review-form', 'class', '1'),
(365, 'input-rating', 'class', '1'),
(366, 'stars>label', 'class', '1'),
(367, 'review-form', 'class', '1'),
(368, 'input-rating', 'class', '1'),
(369, 'stars>label:hover,', 'class', '1'),
(370, 'review-form', 'class', '1'),
(371, 'input-rating', 'class', '1'),
(372, 'stars>label:hover~label', 'class', '1'),
(373, 'review-form', 'class', '1'),
(374, 'input-rating', 'class', '1'),
(375, 'stars>label:before', 'class', '1'),
(376, 'review-form', 'class', '1'),
(377, 'input-rating', 'class', '1'),
(378, 'stars>label:hover:before,', 'class', '1'),
(379, 'review-form', 'class', '1'),
(380, 'input-rating', 'class', '1'),
(381, 'stars>label:hover~label:before', 'class', '1'),
(382, 'review-form', 'class', '1'),
(383, 'input-rating', 'class', '1'),
(384, 'stars>input:checked', 'class', '1'),
(385, 'review-form', 'class', '1'),
(386, 'input-rating', 'class', '1'),
(387, 'stars>input:checked~label:before', 'class', '1'),
(388, 'shiping-methods', 'class', '1'),
(389, 'shopping-cart-table>tbody>tr>td,', 'class', '1'),
(390, 'shopping-cart-table>tbody>tr>th,', 'class', '1'),
(391, 'shopping-cart-table>tfoot>tr>td,', 'class', '1'),
(392, 'shopping-cart-table>tfoot>tr>th,', 'class', '1'),
(393, 'shopping-cart-table>thead>tr>td,', 'class', '1'),
(394, 'shopping-cart-table>thead>tr>th', 'class', '1'),
(395, 'shopping-cart-table>thead>tr>th', 'class', '1'),
(396, 'shopping-cart-table>tbody>tr:last-child>td', 'class', '1'),
(397, 'shopping-cart-table>tfoot>tr>td,', 'class', '1'),
(398, 'shopping-cart-table>tfoot>tr>th', 'class', '1'),
(399, 'shopping-cart-table>tfoot>tr>td:not(.empty),', 'class', '1'),
(400, 'shopping-cart-table>tfoot>tr>th:not(.empty)', 'class', '1'),
(401, 'shopping-cart-table>tbody>tr>.details>a', 'class', '1'),
(402, 'shopping-cart-table>tbody>tr>.thumb>img', 'class', '1'),
(403, 'shopping-cart-table>tbody>tr>.qty', 'class', '1'),
(404, 'input', 'class', '1'),
(405, 'shopping-cart-table>tbody>tr>.price', 'class', '1'),
(406, 'shopping-cart-table>tbody>tr>.total', 'class', '1'),
(407, 'shopping-cart-table>tfoot>tr>.sub-total', 'class', '1'),
(408, 'shopping-cart-table>tfoot>tr>.total', 'class', '1'),
(409, 'footer', 'class', '1'),
(410, 'footer', 'class', '1'),
(411, 'footer-header', 'class', '1'),
(412, 'footer-logo', 'class', '1'),
(413, 'footer-logo', 'class', '1'),
(414, 'logo', 'class', '1'),
(415, 'footer-logo', 'class', '1'),
(416, 'logo>img', 'class', '1'),
(417, 'footer-social>li', 'class', '1'),
(418, 'footer-social>li:last-child', 'class', '1'),
(419, 'footer-copyright', 'class', '1'),
(420, 'slick-prev,', 'class', '1'),
(421, 'slick-next', 'class', '1'),
(422, 'slick-prev:hover,', 'class', '1'),
(423, 'slick-prev:focus,', 'class', '1'),
(424, 'slick-next:hover,', 'class', '1'),
(425, 'slick-next:focus', 'class', '1'),
(426, 'slick-prev:before,', 'class', '1'),
(427, 'slick-next:before', 'class', '1'),
(428, 'slick-prev', 'class', '1'),
(429, 'slick-next', 'class', '1'),
(430, 'custom-nav', 'class', '1'),
(431, 'slick-prev,', 'class', '1'),
(432, 'custom-nav', 'class', '1'),
(433, 'slick-next', 'class', '1'),
(434, 'slick-dots', 'class', '1'),
(435, 'slick-dots', 'class', '1'),
(436, 'slick-dots', 'class', '1'),
(437, 'slick-dots', 'class', '1'),
(438, 'slick-dots', 'class', '1'),
(439, 'custom-dots', 'class', '1'),
(440, 'slick-dots', 'class', '1'),
(441, 'home', 'id', '1'),
(442, 'home-wrap', 'class', '1'),
(443, 'aside', 'id', '1'),
(444, 'product-reviews', 'class', '1'),
(445, 'banner', 'class', '1'),
(446, 'store-filter', 'class', '1'),
(447, 'pull-right,', 'class', '1'),
(448, 'store-filter', 'class', '1'),
(449, 'pull-left', 'class', '1'),
(450, 'store-filter', 'class', '1'),
(451, 'pull-right', 'class', '1');

-- --------------------------------------------------------

--
-- Table structure for table `toolbox`
--

CREATE TABLE `toolbox` (
  `id` int(11) NOT NULL,
  `toolboxName` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `toolbox`
--

INSERT INTO `toolbox` (`id`, `toolboxName`) VALUES
(1, 'textbox'),
(2, 'passwordbox'),
(3, 'combobox'),
(4, 'checkbox'),
(5, 'radiobutton'),
(6, 'dateboxPicker'),
(7, 'filePicker');

-- --------------------------------------------------------

--
-- Table structure for table `toolboxs`
--

CREATE TABLE `toolboxs` (
  `id` int(11) NOT NULL,
  `toolboxName` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `toolboxs`
--

INSERT INTO `toolboxs` (`id`, `toolboxName`) VALUES
(1, 'textbox'),
(2, 'passwordbox'),
(3, 'combobox'),
(4, 'checkbox'),
(5, 'radiobutton'),
(6, 'dateboxPicker');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `mobileNumber` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `creationDate` datetime DEFAULT current_timestamp(),
  `statusId` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `mobileNumber`, `email`, `creationDate`, `statusId`) VALUES
('{A8945A24-0759-7808-0A38-F36FFC6097BE}', 'james', 'yiga', '+256781587081', 'james1yiga@gmail.com', '2020-05-01 21:37:56', 1),
('{C1F587C1-AF06-AB17-DA4D-D6FBD183FB49}', 'James Tom', 'Matovu', '+256772771859', 'james2yiga@yahoo.com', '2020-07-31 18:34:54', 1);

-- --------------------------------------------------------

--
-- Table structure for table `userdocs`
--

CREATE TABLE `userdocs` (
  `id` int(11) NOT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `path` varchar(150) NOT NULL,
  `doctypeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userdoctypes`
--

CREATE TABLE `userdoctypes` (
  `id` int(11) NOT NULL,
  `doctypes` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `useroftype`
--

CREATE TABLE `useroftype` (
  `userId` varchar(50) NOT NULL,
  `userTypeId` int(11) NOT NULL,
  `isActive` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useroftype`
--

INSERT INTO `useroftype` (`userId`, `userTypeId`, `isActive`) VALUES
('{A8945A24-0759-7808-0A38-F36FFC6097BE}', 1, 1),
('{C1F587C1-AF06-AB17-DA4D-D6FBD183FB49}', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `userpge`
--

CREATE TABLE `userpge` (
  `id` varchar(50) NOT NULL,
  `folder` varchar(50) NOT NULL,
  `image` int(50) NOT NULL,
  `isactive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userterms`
--

CREATE TABLE `userterms` (
  `id` int(11) NOT NULL,
  `userId` varchar(50) NOT NULL,
  `accepted` varchar(20) DEFAULT NULL,
  `dateTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usertype`
--

CREATE TABLE `usertype` (
  `id` int(11) NOT NULL,
  `userTypeName` varchar(50) NOT NULL,
  `isActive` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertype`
--

INSERT INTO `usertype` (`id`, `userTypeName`, `isActive`) VALUES
(1, 'Service Provider', 1),
(2, 'Customer', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usertyperole`
--

CREATE TABLE `usertyperole` (
  `id` int(11) NOT NULL,
  `userTypeId` int(11) NOT NULL,
  `subActivityId` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `creationDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `verifycode`
--

CREATE TABLE `verifycode` (
  `id` int(11) NOT NULL,
  `userId` varchar(50) NOT NULL,
  `code` varchar(5) NOT NULL,
  `isActive` tinyint(1) DEFAULT 0,
  `creationDate` datetime DEFAULT current_timestamp(),
  `verificationDate` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `verifycode`
--

INSERT INTO `verifycode` (`id`, `userId`, `code`, `isActive`, `creationDate`, `verificationDate`) VALUES
(16, '{A8945A24-0759-7808-0A38-F36FFC6097BE}', 'CA0M6', 1, '2020-05-01 21:37:56', '2020-05-01 21:39:32'),
(17, '{C1F587C1-AF06-AB17-DA4D-D6FBD183FB49}', 'ZA5B5', 0, '2020-07-31 18:34:54', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vetuser`
--

CREATE TABLE `vetuser` (
  `id` int(11) NOT NULL,
  `userId` varchar(50) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `reason` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  `vettedby` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `webpage`
--

CREATE TABLE `webpage` (
  `id` int(15) NOT NULL,
  `namepge` varchar(150) NOT NULL,
  `parentId` int(15) DEFAULT NULL,
  `orderIndex` int(5) NOT NULL,
  `showPge` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `webpage`
--

INSERT INTO `webpage` (`id`, `namepge`, `parentId`, `orderIndex`, `showPge`) VALUES
(8, 'Home', NULL, 1, 1),
(9, 'About Us', NULL, 2, 1),
(10, 'Service', NULL, 3, 1),
(11, 'Electrical Service', 10, 4, 1),
(12, 'Construction', 10, 5, 1),
(13, 'Mechanical', 10, 6, 1),
(14, 'Retail Advisory', 10, 7, 1),
(15, 'Projects', NULL, 8, 1),
(16, 'Contact Us', NULL, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `webpagesection`
--

CREATE TABLE `webpagesection` (
  `id` int(15) NOT NULL,
  `sectionName` varchar(150) NOT NULL,
  `clsSection` varchar(150) DEFAULT NULL,
  `positionIndex` int(5) NOT NULL,
  `columnNo` int(2) NOT NULL,
  `pgeId` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `webpagesection`
--

INSERT INTO `webpagesection` (`id`, `sectionName`, `clsSection`, `positionIndex`, `columnNo`, `pgeId`) VALUES
(2, 'Slider', 'slider_area row m0', 1, 1, 8),
(4, 'objective', 'professional_builder row', 2, 1, 8),
(5, 'Who We are', 'about_us_area row', 3, 1, 8),
(6, 'Service', 'what_we_area row', 4, 1, 8),
(7, 'feature', 'our_feature_area', 5, 1, 8),
(8, 'Our Services', 'our_services_area', 6, 1, 8),
(9, 'our team', 'our_team_area', 7, 1, 8),
(10, 'Our Achievment', 'our_achievments_area', 8, 1, 8),
(11, 'Get Quote', 'our_partners_area', 9, 1, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attkey`
--
ALTER TABLE `attkey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attkeyval`
--
ALTER TABLE `attkeyval`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `businessprofile`
--
ALTER TABLE `businessprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorypge`
--
ALTER TABLE `categorypge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `columncontent`
--
ALTER TABLE `columncontent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `configurationsetting`
--
ALTER TABLE `configurationsetting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactdetail`
--
ALTER TABLE `contactdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customerdeliverypoint`
--
ALTER TABLE `customerdeliverypoint`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customerorder`
--
ALTER TABLE `customerorder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dbchgn`
--
ALTER TABLE `dbchgn`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entity`
--
ALTER TABLE `entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entityfield`
--
ALTER TABLE `entityfield`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entityform`
--
ALTER TABLE `entityform`
  ADD PRIMARY KEY (`colName`);

--
-- Indexes for table `guitoolbox`
--
ALTER TABLE `guitoolbox`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imagefile`
--
ALTER TABLE `imagefile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itemtemplate`
--
ALTER TABLE `itemtemplate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listhandle`
--
ALTER TABLE `listhandle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listingentry`
--
ALTER TABLE `listingentry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pageresource`
--
ALTER TABLE `pageresource`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productimage`
--
ALTER TABLE `productimage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rolemanagement`
--
ALTER TABLE `rolemanagement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sectioncolumn`
--
ALTER TABLE `sectioncolumn`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `spec`
--
ALTER TABLE `spec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `speckey`
--
ALTER TABLE `speckey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statu`
--
ALTER TABLE `statu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subactivity`
--
ALTER TABLE `subactivity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `systemuser`
--
ALTER TABLE `systemuser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `termsandconditions`
--
ALTER TABLE `termsandconditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testexp`
--
ALTER TABLE `testexp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testxp`
--
ALTER TABLE `testxp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theme`
--
ALTER TABLE `theme`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `themefile`
--
ALTER TABLE `themefile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `themestyle`
--
ALTER TABLE `themestyle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `toolbox`
--
ALTER TABLE `toolbox`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `toolboxs`
--
ALTER TABLE `toolboxs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `statusId` (`statusId`),
  ADD KEY `mobileNumber` (`mobileNumber`);

--
-- Indexes for table `userdocs`
--
ALTER TABLE `userdocs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdoctypes`
--
ALTER TABLE `userdoctypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `useroftype`
--
ALTER TABLE `useroftype`
  ADD PRIMARY KEY (`userId`,`userTypeId`),
  ADD KEY `userTypeId` (`userTypeId`);

--
-- Indexes for table `userpge`
--
ALTER TABLE `userpge`
  ADD KEY `id` (`id`);

--
-- Indexes for table `userterms`
--
ALTER TABLE `userterms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usertyperole`
--
ALTER TABLE `usertyperole`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userTypeId` (`userTypeId`),
  ADD KEY `subActivityId` (`subActivityId`);

--
-- Indexes for table `verifycode`
--
ALTER TABLE `verifycode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `vetuser`
--
ALTER TABLE `vetuser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webpage`
--
ALTER TABLE `webpage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webpagesection`
--
ALTER TABLE `webpagesection`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `attkey`
--
ALTER TABLE `attkey`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `attkeyval`
--
ALTER TABLE `attkeyval`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `businessprofile`
--
ALTER TABLE `businessprofile`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categorypge`
--
ALTER TABLE `categorypge`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `columncontent`
--
ALTER TABLE `columncontent`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `configurationsetting`
--
ALTER TABLE `configurationsetting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `contactdetail`
--
ALTER TABLE `contactdetail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customerdeliverypoint`
--
ALTER TABLE `customerdeliverypoint`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customerorder`
--
ALTER TABLE `customerorder`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `dbchgn`
--
ALTER TABLE `dbchgn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entity`
--
ALTER TABLE `entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `entityfield`
--
ALTER TABLE `entityfield`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=445;

--
-- AUTO_INCREMENT for table `imagefile`
--
ALTER TABLE `imagefile`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `itemtemplate`
--
ALTER TABLE `itemtemplate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `listhandle`
--
ALTER TABLE `listhandle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `listingentry`
--
ALTER TABLE `listingentry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pageresource`
--
ALTER TABLE `pageresource`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productimage`
--
ALTER TABLE `productimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rolemanagement`
--
ALTER TABLE `rolemanagement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=376;

--
-- AUTO_INCREMENT for table `sectioncolumn`
--
ALTER TABLE `sectioncolumn`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `spec`
--
ALTER TABLE `spec`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `speckey`
--
ALTER TABLE `speckey`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statu`
--
ALTER TABLE `statu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `subactivity`
--
ALTER TABLE `subactivity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `termsandconditions`
--
ALTER TABLE `termsandconditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testexp`
--
ALTER TABLE `testexp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `testxp`
--
ALTER TABLE `testxp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `theme`
--
ALTER TABLE `theme`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `themefile`
--
ALTER TABLE `themefile`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `themestyle`
--
ALTER TABLE `themestyle`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=452;

--
-- AUTO_INCREMENT for table `toolbox`
--
ALTER TABLE `toolbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `toolboxs`
--
ALTER TABLE `toolboxs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `userdocs`
--
ALTER TABLE `userdocs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userdoctypes`
--
ALTER TABLE `userdoctypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userterms`
--
ALTER TABLE `userterms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertype`
--
ALTER TABLE `usertype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usertyperole`
--
ALTER TABLE `usertyperole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `verifycode`
--
ALTER TABLE `verifycode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `vetuser`
--
ALTER TABLE `vetuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `webpage`
--
ALTER TABLE `webpage`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `webpagesection`
--
ALTER TABLE `webpagesection`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rolemanagement`
--
ALTER TABLE `rolemanagement`
  ADD CONSTRAINT `rolemanagement_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `subactivity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rolemanagement_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `subactivity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rolemanagement_ibfk_4` FOREIGN KEY (`userId`) REFERENCES `systemuser` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `useroftype`
--
ALTER TABLE `useroftype`
  ADD CONSTRAINT `useroftype_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `useroftype_ibfk_2` FOREIGN KEY (`userTypeId`) REFERENCES `usertype` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `usertyperole`
--
ALTER TABLE `usertyperole`
  ADD CONSTRAINT `usertyperole_ibfk_1` FOREIGN KEY (`userTypeId`) REFERENCES `usertype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usertyperole_ibfk_2` FOREIGN KEY (`subActivityId`) REFERENCES `subactivity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `verifycode`
--
ALTER TABLE `verifycode`
  ADD CONSTRAINT `verifycode_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
