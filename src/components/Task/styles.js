import styled from 'styled-components';

export const TaskContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 20px;
	padding: 10px;

	border-radius: 5px;
	background-color: rgba(41, 129, 196, 0.1);

	@media (max-width: 600px) {
		align-items: flex-start;
		flex-direction: column;
		gap: 10px;
	}
`;
export const TaskHead = styled.header`
	width: 100%;
	padding-bottom: 10px;

	@media (max-width: 600px) {
		border-bottom: 1px solid #a9a9a9;
	}
`;
export const TaskAuthor = styled.h3`
	font-weight: 400;
	color: #2981c4;
`;
export const TaskTitle = styled.h2`
	font-size: 20px;
`;
export const TaskDescription = styled.p`
	font-size: 16px;
`;

export const TaskBody = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;

	padding-left: 20px;
	@media (max-width: 600px) {
		padding-left: 0px;

		width: 100%;
		flex-direction: row;
		justify-content: space-between;
	}
`;
export const TaskStatus = styled.p`
	text-align: center;
	padding: 5px;
	border-radius: 5px;
	font-weight: bold;
	color: white;

	background: ${(props) => {
		if (props.progress) {
			return '#2981c4';
		} else if (props.pending) {
			return 'yellow;';
		} else {
			return 'green;';
		}
	}};
`;
export const TaskActions = styled.div`
	display: flex;
`;
export const TaskEdit = styled.button`
	color: yellow;
	width: 30px;
	height: 30px;
	border: none;
`;
export const TaskDelete = styled.button`
	color: red;
	width: 30px;
	height: 30px;
	border: none;
`;
