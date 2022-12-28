import { menuActions, renderItemAs } from '@/components/CommonTable';
import type { TItemMenuAction } from '@/components/CommonTable/_types';
import PATHS from '@/routes/paths';
import { i18n } from '@/translation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { T__module__ListItem } from '../_types';
import { ListItemActionDelete, ListItemActionEdit } from '../context';

// for complex action item or
// using the hook `useAsyncList` to interact with the List context, see these components
// import DeleteItem from './DeleteItem';
// import EditItem from './EditItem';
// then wrap them with `renderItemAs()`
// e.g { ..., render: renderItemAs(EditItem) }

const rowActions: TItemMenuAction<T__module__ListItem>[] = menuActions<T__module__ListItem>([
  { label: i18n.t('common:edit'), icon: EditIcon, render: renderItemAs(ListItemActionEdit) },
  { label: i18n.t('common:delete'), icon: DeleteIcon, render: renderItemAs(ListItemActionDelete) },
  { type: 'divider' },
  { label: 'Navigate to somewhere', icon: ArrowForwardIcon, to: PATHS.dashboard1 },
]);
export default rowActions;