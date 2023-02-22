import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
import type { User } from '../../types/user'
import { currentUser, errors } from './store'

const auth = getAuth(app)

export function SignUp ({ email, password }: User) {
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			const { user } = userCredential
			currentUser.update(current => (current = user))
		})
		.catch(error => {
			errors.update(erro => (erro = error))
		})
}

export function SignInWithCredentials ({ email, password }: User) {
	signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			const { user } = userCredential

			currentUser.update(current => (current = user))
		})
		.catch(error => {
			errors.update(erro => (erro = error))
		})
}
