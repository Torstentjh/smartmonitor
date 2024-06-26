import { useQuery, Mutation, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
// import { onlineManager } from "@tanstack/react-query";
// import { useFocusEffect } from '@react-navigation/native'

const fetchQuery = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_DevApi}/user/querymember`);
    return data;
};
const fetchMember = async (id: any, path: string) => {
    const formData = new URLSearchParams();
    formData.append('addUserID', id);
    const { data } = await axios.post(`${process.env.REACT_APP_DevApi}/user/${path}`, formData.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    return data;
}
const fetchLogin = async (body: any) => {
    const formData = new URLSearchParams();
    formData.append('name', body.name);
    formData.append('pwd', body.pwd);
    const { data } = await axios.post(`${process.env.REACT_APP_DevApi}/login`, formData.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    return data;
}

const queryMenber = () => useQuery({ queryKey: ['member'], queryFn: fetchQuery });
const DeleMenber = (id: string | null, path: string) => useQuery({ queryKey: ['dele', id], queryFn: () => { fetchMember(id, path) }, enabled: !!id, retry: false });
const AddMenber = (id: string | null, path: string) => useQuery({ queryKey: ['add', id], queryFn: () => { fetchMember(id, path) }, enabled: !!id, retry: false });
const toLogin = (body: { name: string, pwd: string }) => useQuery({ queryKey: ['login'], queryFn: () => fetchLogin(body) });

export { queryMenber, DeleMenber, AddMenber, toLogin };

