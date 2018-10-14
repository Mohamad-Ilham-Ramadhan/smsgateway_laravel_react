import Dashboard from '@/components/pages/Dashboard';
import Autoreply from '@/components/pages/Autoreply';
import AutoreplyCreate from '@/components/pages/AutoreplyCreate';
import AutoreplyEdit from '@/components/pages/AutoreplyEdit';
import GroupContact from '@/components/pages/GroupContact';
import GroupContactCreate from '@/components/pages/GroupContactCreate';
import GroupContactEdit from '@/components/pages/GroupContactEdit';
import GroupContactShow from '@/components/pages/GroupContactShow';
import Inbox from '@/components/pages/Inbox';
import Outbox from '@/components/pages/Outbox';
import Pasien from '@/components/pages/Pasien';
import PasienCreate from '@/components/pages/PasienCreate';
import PasienEdit from '@/components/pages/PasienEdit';
import PasienShow from '@/components/pages/PasienShow';
import SendSMSGroup from '@/components/pages/SendSMSGroup';
import SendSMSSingle from '@/components/pages/SendSMSSingle';
import SentItem from '@/components/pages/SentItem';
import User from '@/components/pages/User';
import UserCreate from '@/components/pages/UserCreate';
import UserEdit from '@/components/pages/UserEdit';

const routes = [
	{
		path: '/dashboard',
		component: Dashboard
	},
	{
		path: '/autoreplies',
		component: Autoreply
	},
	{
		path: '/autoreplies/create',
		component: AutoreplyCreate
	},
	{
		path: '/autoreplies/:id/edit',
		component: AutoreplyEdit
	},
	{
		path: '/group-contacts',
		component: GroupContact
	},
	{
		path: '/group-contacts/create',
		component: GroupContactCreate
	},
	{
		path: '/group-contacts/:id/edit',
		component: GroupContactEdit
	},
	{
		path: '/group-contacts/:id',
		component: GroupContactShow
	},
	{
		path: '/inboxs',
		component: Inbox
	},
	{
		path: '/outboxs',
		component: Outbox
	},
	{
		path: '/pasien',
		component: Pasien
	},
	{
		path: '/pasien/create',
		component: PasienCreate
	},
	{
		path: '/pasien/:id/edit',
		component: PasienEdit
	},
	{
		path: '/pasien/:id',
		component: PasienShow
	},
	{
		path: '/send-sms-group/create',
		component: SendSMSGroup
	},
	{
		path: '/send-sms-single/create',
		component: SendSMSSingle
	},
	{
		path: '/sent-items',
		component: SentItem
	},
	{
		path: '/users',
		component: User
	},
	{
		path: '/users/create',
		component: UserCreate
	},
	{
		path: '/users/:id/edit',
		component: UserEdit
	},
];

export default routes;