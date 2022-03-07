import { FaSolidUserMinus } from "solid-icons/fa";
import { createResource, For, Match, Show, Switch } from "solid-js";
import GroupCard from "../../components/groups/GroupCard";
import { fetchJoinedGroups } from "../../services/group.service";
import Empty from "../../components/shared/Empty";
import Error from "../../components/shared/Error";
import GroupCardSkeleton from "../../components/groups/GroupCardSkeleton";
import useGroups from "../../hooks/useGroups";

export default function GroupsSuggestions() {
  const [resource, { refetch }] = createResource(fetchJoinedGroups);
  const { handleLeaveGroup, loading } = useGroups(refetch);
  return (
    <div>
      <h4 className="text-2xl font-bold">Groups You`ve Joined</h4>

      <div className="py-4">
        <div className="my-8">
          <Switch>
            <Match when={resource.loading}>
              <GroupCardSkeleton />
            </Match>
            <Match when={resource.error}>
              <Error
                error="server"
                name={resource.error.name}
                message={resource.error.message}
              />
            </Match>
            <Match when={resource()}>
              <Show
                when={resource().data.data.groups.length}
                fallback={
                  <Empty
                  title="No Groups Joined"
                  subTitle="You have not joined any group"
                  />
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  <For each={resource().data.data.groups}>
                    {(group) => (
                      <GroupCard {...group}>
                        <button
                          className="text-red-500 dark:text-white font-semibold py-2 w-full flex items-center  bg-red-100 dark:bg-gray-700 justify-center space-x-2 hover:bg-red-200 dark:hover:bg-gray-600 rounded-lg text-sm"
                          disabled={loading()}
                          onClick={[handleLeaveGroup, group.id]}
                        >
                          <Show
                            when={loading()}
                            fallback={
                              <>
                                <FaSolidUserMinus size={18} />
                                <span>Leave Group</span>
                              </>
                            }
                          >
                            leaving...
                          </Show>
                        </button>
                      </GroupCard>
                    )}
                  </For>
                </div>
              </Show>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}
