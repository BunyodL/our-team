import { useUpdateUserPhotoMutation } from "../../api/usersApi/usersApiSlice";

type UpdateUserPhotoType = {
  userId?: number;
};

export function UpdateUserPhoto({ userId }: UpdateUserPhotoType) {
  const [updateUserPhoto, { data, isSuccess, isError, error }] = useUpdateUserPhotoMutation();

	// API не предоставляет возможность изменения аватарки
	// но логика выполнения была бы примерно такой
  const onPhotoSelected = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    const formData = new FormData();
    formData.append('avatar', target.files[0]);

    updateUserPhoto({ userId: userId!, formData });
  };

  if (isSuccess) {
    console.log(data);
  }

  if (isError) {
    console.log(error);
  }

  return (
    <div className="active:scale-95 w-fit">
      <label
        htmlFor="uploadPhoto"
        className="w-fit bg-white text-black pt-1 pb-1 pl-3 pr-3 rounded-[8px] cursor-pointer "
      >
        Загрузить фото
      </label>
      <input
        type="file"
        id="uploadPhoto"
        className="hidden"
        accept="image/png, image/jpeg"
        name="avatar"
        onChange={onPhotoSelected}
        onClick={() => alert('API не предоставляет возможность изменения аватарки')}
      />
    </div>
  );
}
