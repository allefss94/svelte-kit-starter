import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
import type { User } from '../../types/user'
import { currentUser, errors } from './store'
import { toast } from '@zerodevx/svelte-toast'
import { goto } from '$app/navigation'

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
			toast.push(`User ${user.email} is LoogedIn`)
			goto('/')
		})
		.catch(error => {
			errors.update(erro => (erro = error))
			toast.push(
				`SignIn error, please check your credentials or make new account <a class="text-indigo-500" href="/register">clicking here</a>`,
				{ pausable: true }
			)
		})
}
