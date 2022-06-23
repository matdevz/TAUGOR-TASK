import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Edit, DeleteBin } from '../../styles/Icons';
import { deteleDocument } from '../../firebase/FirebaseStore';
import {
	TaskContainer,
	TaskHead,
	TaskAuthor,
	TaskTitle,
	TaskDescription,
	TaskBody,
	TaskStatus,
	TaskActions,
	TaskEdit,
	TaskDelete,
} from './styles';

export const Tasks = (props) => {
	const navigate = useNavigate();

	const checkStatus = () => {
		if (props.status === 'progress') {
			return <TaskStatus progress>Andamento</TaskStatus>;
		} else if (props.status === 'pending') {
			return <TaskStatus pending>Pendente</TaskStatus>;
		} else {
			return <TaskStatus>Finalizada</TaskStatus>;
		}
	};
	const currentUser = useContext(AuthContext);

	const handleDelete = () => {
		console.log(props.id);
		deteleDocument(currentUser.uid, props.title);
	};

	const handleEdit = () => {
		navigate('/editask', { replace: true });
	};

	return (
		<>
			<TaskContainer id={props.id}>
				<TaskHead>
					<TaskAuthor>{props.author}</TaskAuthor>
					<TaskTitle>{props.title}</TaskTitle>
					<TaskDescription>{props.description}</TaskDescription>
				</TaskHead>
				<TaskBody>
					{checkStatus()}
					<TaskActions>
						<TaskEdit onClick={handleEdit}>
							<Edit />
						</TaskEdit>
						<TaskDelete onClick={handleDelete}>
							<DeleteBin />
						</TaskDelete>
					</TaskActions>
				</TaskBody>
			</TaskContainer>
		</>
	);
};
