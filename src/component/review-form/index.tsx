import { ChangeEventHandler, FC, SyntheticEvent, useEffect, useState } from 'react';
import { ReviewResponse } from '../../type/review.response';
import { FavoriteModel } from '../../model/favorite';
import { PurchaseResponse } from '../../type/purchase.response';
import { ReviewType } from '../../enum/review-type.enum';
import { Card, Grid2, IconButton, Rating, TextField, Typography, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { getStyles } from './styles';
import { REVIEW_SERVICE } from '../../service/review.service';

export type FavoriteReviewFormProps = {
  review: ReviewResponse;
  type: ReviewType.favorite;
  onUpdate: (favorite: FavoriteModel) => void;
  onDelete: (favorite: FavoriteModel) => void;
  disabled?: boolean;
};

export type PurchaseReviewFormProps = {
  review: ReviewResponse;
  type: ReviewType.purchase;
  onUpdate: (purchase: PurchaseResponse) => void;
  onDelete: (purchase: PurchaseResponse) => void;
  disabled?: boolean;
};

export type ReviewFormProps = FavoriteReviewFormProps | PurchaseReviewFormProps;

const ReviewForm: FC<ReviewFormProps> = ({ review, type, onUpdate, onDelete, disabled }) => {
  const theme = useTheme();
  const [styles] = useState(getStyles(theme));
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState('');
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setRate(review.rate);
    setComment(review.comment);
  }, [review]);

  const changeRate = (e: SyntheticEvent, newRate: number | null) => {
    e.stopPropagation();
    REVIEW_SERVICE.update(type, review.id, newRate ?? undefined)
      .then(({ data }) => {
        if (type === ReviewType.favorite) onUpdate(data.favorite);
        if (type === ReviewType.purchase) onUpdate(data.purchase);
      })
      .catch((e) => console.error(e));
  };

  const changeComment: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setComment(e.target.value);
  };

  const saveComment = () => {
    setEdit(false);
    REVIEW_SERVICE.update(type, review.id, undefined, comment)
      .then(({ data }) => {
        if (type === ReviewType.favorite) onUpdate(data.favorite);
        if (type === ReviewType.purchase) onUpdate(data.purchase);
      })
      .catch((e) => console.error(e));
  };

  const deleteReview = () => {
    REVIEW_SERVICE.delete(type, review.id)
      .then(({ data }) => {
        if (type === ReviewType.favorite) onDelete(data.favorite);
        if (type === ReviewType.purchase) onDelete(data.purchase);
      })
      .catch((e) => console.error(e));
  };

  return (
    <Card elevation={5} sx={styles.root} onClick={(e) => e.stopPropagation()}>
      <Grid2 sx={styles.content}>
        <Grid2 sx={styles.review}>
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={changeRate}
            sx={styles.rate}
            disabled={disabled}
          />
          {edit && !disabled ? (
            <TextField
              value={comment}
              multiline={true}
              size="small"
              maxRows={3}
              rows={3}
              onChange={changeComment}
            />
          ) : (
            <Typography variant="body1" {...(!review.comment && { fontWeight: 'bold' })}>
              {review.comment ? review.comment : 'Sin reseña'}
            </Typography>
          )}
        </Grid2>
        {!disabled &&
          (edit ? (
            <>
              <IconButton sx={styles.button} onClick={saveComment}>
                <SaveAsIcon />
              </IconButton>
              <IconButton sx={styles.button} onClick={() => setEdit(false)}>
                <EditOffIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton sx={styles.button} onClick={() => setEdit(true)}>
                <EditIcon />
              </IconButton>
              <IconButton sx={styles.button} onClick={deleteReview}>
                <DeleteIcon />
              </IconButton>
            </>
          ))}
      </Grid2>
    </Card>
  );
};

export default ReviewForm;
