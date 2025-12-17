import { adminDb } from './firebase-admin';

export async function getUserSubscription(uid: string) {
  const snap = await adminDb.collection('subscriptions').doc(uid).get();
  return snap.exists ? snap.data() : null;
}