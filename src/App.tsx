import { useEffect, useState } from 'react';
import NotesMain from './components/NotesMain/NotesMain.component';
import ReadFirst from './components/ReadFirst/ReadFirst.component';

function App() {
	const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);

	function handleFirstVisit() {
		setIsFirstVisit(false);
		localStorage.setItem('firstVisit', 'false');
	}

	useEffect(() => {
		const firstVisit = localStorage.getItem('firstVisit');
		if (!firstVisit) {
			localStorage.setItem('firstVisit', 'true');
			setIsFirstVisit(true);
		} else {
			const visit =
				firstVisit === 'true' ? setIsFirstVisit(true) : setIsFirstVisit(false);
			console.log(visit);
		}
	}, []);

	return (
		<>
			{isFirstVisit && <ReadFirst onClick={handleFirstVisit} />}
			{!isFirstVisit && <NotesMain />}
		</>
	);
}

export default App;
